package com.github.oneline.onelinecourse.common.error.exception;

import com.github.oneline.onelinecourse.common.Messages;

public class LectureNotFoundException extends BusinessException {

    public LectureNotFoundException() {
        super(Messages.NOT_LECTURE_MESSAGE);
    }
}
