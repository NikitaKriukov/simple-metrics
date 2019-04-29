package nikita.simple.appl;

import java.text.NumberFormat;

/**
 * Takes information about available memory from Java Runtime.
 */
public final class MemoryInfo {

    private long maxMemory;         // Maximum for this JVM
    private long allocatedMemory;   // Currently allocated amount of memory
    private long freeMemory;        // Current amount of free memory

    // Be aware that the below setters, getters and default constructor are necessary for JSON serialization.

    public long getMaxMemory() {
        return maxMemory;
    }

    public long getAllocatedMemory() {
        return allocatedMemory;
    }

    public long getFreeMemory() {
        return freeMemory;
    }

    public void setMaxMemory(long maxMemory) {
        this.maxMemory = maxMemory;
    }

    public void setAllocatedMemory(long allocatedMemory) {
        this.allocatedMemory = allocatedMemory;
    }

    public void setFreeMemory(long freeMemory) {
        this.freeMemory = freeMemory;
    }

    public static MemoryInfo getMemoryInfo() {
        Runtime runtime = Runtime.getRuntime();
        MemoryInfo memoryInfo = new MemoryInfo();
        memoryInfo.maxMemory = runtime.maxMemory();
        memoryInfo.allocatedMemory = runtime.totalMemory();
        memoryInfo.freeMemory = runtime.freeMemory();
        return memoryInfo;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder(50);
        NumberFormat format = NumberFormat.getInstance();
        format.setMaximumFractionDigits(0);
        String ls = System.getProperty("line.separator");
        //
        sb.append("free memory:       " + format.format(freeMemory / 1024 / 1024)).append("MB").append(ls);
        sb.append("allocated memory:  " + format.format(allocatedMemory / 1024 / 1024)).append("MB").append(ls);
        sb.append("max memory:        " + format.format(maxMemory / 1024 / 1024)).append("MB").append(ls);
        sb.append("total free memory: " + format.format((freeMemory + (maxMemory - allocatedMemory)) / 1024 / 1024)).append("MB").append(ls);
        //
        return sb.toString();
    }

//    public static void main(String[] args) throws JsonProcessingException {
//        MemoryInfo memoryInfo = MemoryInfo.getMemoryInfo();
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String resultJSON = objectMapper.writeValueAsString(memoryInfo);
//        System.out.println(resultJSON);
//    }

}
