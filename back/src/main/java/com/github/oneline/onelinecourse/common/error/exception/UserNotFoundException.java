package com.github.oneline.onelinecourse.common.error.exception;

import com.github.oneline.onelinecourse.common.Messages;

public class UserNotFoundException extends BusinessException {

    public UserNotFoundException() {
        super(Messages.NOT_USER_MESSAGE);
    }
}
