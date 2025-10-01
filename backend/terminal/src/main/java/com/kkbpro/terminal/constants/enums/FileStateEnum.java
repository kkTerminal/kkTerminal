package com.kkbpro.terminal.constants.enums;

public enum FileStateEnum {

    FILE_UPLOADING(202, "文件后台上传中"),

    CHUNK_UPLOAD_SUCCESS(203, "文件片上传成功"),

    FILE_NOT_EXIST(417, "文件不存在"),

    DECRYPT_ERROR(501, "文件片解密失败"),

    UPLOAD_ERROR(502, "文件片上传失败"),

    UPLOAD_CHUNK_LOST(503, "文件片缺失"),

    UPLOAD_SIZE_DIFF(504, "上传文件大小不一致"),

    CHUNK_MERGE_ERROR(505, "文件片合并失败"),

    CLOUD_COUNT_ERROR(506, "云端文件过多"),

    SSH_NOT_EXIST(602, "ssh连接断开");

    private final Integer state;

    private final String desc;

    FileStateEnum(Integer state, String desc) {
        this.state = state;
        this.desc = desc;
    }

    public static FileStateEnum getByState(Integer state) {
        for (FileStateEnum item : FileStateEnum.values()) {
            if (item.getState().equals(state)) {
                return item;
            }
        }
        return null;
    }

    public Integer getState() {
        return state;
    }

    public String getDesc() {
        return desc;
    }

}
