package com.kkbpro.terminal.pojo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

/**
 * 文件信息
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileUploadInfo {

    private String secretKey;

    private MultipartFile file;

    private String fileName;

    private Integer chunks;

    private Integer chunk;

    private Long totalSize;

    private String id;

    private String sshKey;

    private String path;

}