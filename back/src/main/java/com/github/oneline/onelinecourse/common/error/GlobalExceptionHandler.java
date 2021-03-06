package com.github.oneline.onelinecourse.common.error;

import com.github.oneline.onelinecourse.common.Messages;
import com.github.oneline.onelinecourse.common.error.exception.BusinessException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MultipartException;

import javax.validation.ConstraintViolationException;
import java.util.stream.Collectors;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    private ResponseEntity<ErrorResponse> newResponse(final ErrorResponse response, final HttpStatus status) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<>(response, headers, status);
    }

    @ExceptionHandler(value = {Exception.class, RuntimeException.class})
    public ResponseEntity<ErrorResponse> handleUnexpectedException(RuntimeException e) {
        log.error("handleUnexpectedException", e);

        final ErrorResponse response = ErrorResponse.of(Messages.UNEXPECTED_EXCEPTION_MESSAGE);
        return newResponse(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(BusinessException e) {
        log.error("handleBusinessException", e);

        final ErrorResponse response = ErrorResponse.of(e.getMessage());
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {
            IllegalStateException.class, IllegalArgumentException.class,
            TypeMismatchException.class, HttpMessageNotReadableException.class,
            MultipartException.class, MissingServletRequestParameterException.class
    })
    public ResponseEntity<ErrorResponse> handleBadRequestException(Exception e) {
        log.debug("handleBadRequestException", e);

        final ErrorResponse response = ErrorResponse.of(e.getMessage());
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * javax.validation.Valid & @Valid ?????? ??????
     * HttpMessageConverter ????????? ?????? ??????
     * -> @RequestBody, @RequestPart ????????????????????? ?????? ??????
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("handleMethodArgumentNotValidException", e);

        final String message = e.getBindingResult().getAllErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.joining(" "));
        log.error(message);

        final ErrorResponse response = ErrorResponse.of(message);
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * hibernate entity manager ????????? ?????? ?????? ?????? ??????
     * entity ?????? ???????????? ?????? filed ?????? ??????
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> handleEntityValidationException(ConstraintViolationException e) {
        log.error(e.getMessage());

        final ErrorResponse response = ErrorResponse.of(e.getMessage());
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }

}
