package com.github.oneline.onelinecourse.common.error.exception;

import com.github.oneline.onelinecourse.common.Messages;

public class CommentNotFoundException extends BusinessException {

    public CommentNotFoundException() {
        super(Messages.NOT_COMMENT_MESSAGE);
    }
}
