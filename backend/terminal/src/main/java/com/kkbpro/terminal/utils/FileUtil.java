package com.kkbpro.terminal.utils;

import com.kkbpro.terminal.constants.enums.FileStateEnum;
import com.kkbpro.terminal.exception.MyException;
import com.kkbpro.terminal.result.Result;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FileUtil {

    public static final String folderBasePath = System.getProperty("user.dir") + "/" + "file";

    /**
     * 文件片合并
     */
    public static void fileChunkMerge(String folderPath, String fileName, Integer chunks, Long totalSize) {
        File folder = new File(folderPath);
        // 合并的文件
        File finalFile = new File(folderPath + "/" + fileName);
        // 获取暂存切片文件的文件夹中的所有文件
        File[] files = folder.listFiles();
        if(files != null)
        {
            try(OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(finalFile, true))) {

                List<File> list = new ArrayList<>();
                for (File file : files) {
                    // 判断是否是文件对应的文件片
                    if (isFileChunk(file.getName(),chunks,fileName)) {
                        list.add(file);
                    }
                }
                // 如果服务器上的切片数量和前端给的数量不匹配
                if (chunks != list.size()) {
                    throw new MyException(Result.error(FileStateEnum.UPLOAD_CHUNK_LOST.getState(), "文件片缺失"));
                }
                // 根据切片文件的下标进行排序
                List<File> fileListCollect = list.parallelStream().sorted(((file1, file2) -> {
                    Integer chunk1 = getFileChunkIndex(file1.getName());
                    Integer chunk2 = getFileChunkIndex(file2.getName());
                    return chunk1 - chunk2;
                })).collect(Collectors.toList());
                // 根据排序的顺序依次将文件合并到新的文件中
                for (File file : fileListCollect) {
                    try(InputStream inputStream = new BufferedInputStream(new FileInputStream(file))) {
                        int len = 0;
                        byte[] bytes = new byte[2 * 1024 * 1024];
                        while ((len = inputStream.read(bytes)) != -1) {
                            outputStream.write(bytes, 0, len);
                        }
                        outputStream.flush();
                    }
                }
            } catch (Exception e) {
                LogUtil.logException(FileUtil.class, e);
                throw new MyException(Result.error(FileStateEnum.CHUNK_MERGE_ERROR.getState(), "文件片合并失败"));
            }
        }
        // 产生的文件大小和前端一开始上传的文件不一致
        if (finalFile.length() != totalSize) {
            throw new MyException(Result.error(FileStateEnum.UPLOAD_SIZE_DIFF.getState(), "上传文件大小不一致"));
        }
    }

    /**
     * 删除文件/文件夹
     */
    public static void fileDelete(File item) {
        if (item.isDirectory()) {
            File[] files = item.listFiles();
            if (files != null) {
                for (File file : files) {
                    fileDelete(file);
                }
            }
        }
        item.delete();
    }


    /**
     * 判断分片文件名
     */
    private static Boolean isFileChunk(String chunkFileName, Integer chunks, String originFileName) {
        int index = chunkFileName.lastIndexOf("-");
        if(index != -1) {
            String fileName = chunkFileName.substring(0,index);
            if(!originFileName.equals(fileName)) return false;
            try {
                int chunk = Integer.parseInt(chunkFileName.substring(index + 1));
                if(chunk < 1 || chunk > chunks) return false;
            } catch (Exception e) {
                return false;
            }
            return true;
        }

        return false;
    }


    /**
     * 获取文件片片号
     */
    private static Integer getFileChunkIndex(String chunkFileName) {
        int index = chunkFileName.lastIndexOf("-");
        if(index != -1) {
            return Integer.parseInt(chunkFileName.substring(index + 1));
        }

        return 1;
    }

}
