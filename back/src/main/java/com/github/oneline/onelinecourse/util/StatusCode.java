package com.github.oneline.onelinecourse.util;

import org.springframework.http.HttpStatus;

import java.util.List;

public class StatusCode {

    private StatusCode() { }

    public static <T> HttpStatus getStatusCode(final List<T> response) {
        return response.isEmpty()
                ? HttpStatus.NO_CONTENT
                : HttpStatus.OK;
    }
}
