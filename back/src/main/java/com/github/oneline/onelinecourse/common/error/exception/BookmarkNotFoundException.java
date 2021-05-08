package com.github.oneline.onelinecourse.common.error.exception;

import com.github.oneline.onelinecourse.common.Messages;

public class BookmarkNotFoundException extends BusinessException {

    public BookmarkNotFoundException() {
        super(Messages.NOT_BOOKMARK_MESSAGE);
    }
}
