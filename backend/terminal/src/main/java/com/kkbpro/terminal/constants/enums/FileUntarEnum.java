package com.kkbpro.terminal.constants.enums;

import com.kkbpro.terminal.utils.StringUtil;

public enum FileUntarEnum {

    TAR_XZ(".tar.xz", "tar -xvJf"),

    TAR_GZ(".tar.gz", "tar -xvzf"),

    TAR_BZ2(".tar.bz2", "tar -xvjf"),

    TAR(".tar", "tar -xvf"),

    TBZ2(".tbz2", "tar -xvjf"),

    GZ(".gz", "gzip -d"),

    BZ2(".bz2", "bzip2 -d"),

    XZ(".xz", "xz -d"),

    ZIP(".zip", "unzip");

    private final String fileSuffix;

    private final String cmdParam;

    FileUntarEnum(String fileSuffix, String cmdParam) {
        this.fileSuffix = fileSuffix;
        this.cmdParam = cmdParam;
    }

    public static FileUntarEnum getByFileName(String fileName) {
        if (StringUtil.isEmpty(fileName)) return null;
        for (FileUntarEnum item : FileUntarEnum.values()) {
            if (fileName.endsWith(item.getFileSuffix())) {
                return item;
            }
        }
        return null;
    }

    public String getFileSuffix() {return fileSuffix;}

    public String getCmdParam() {return cmdParam;}

}
