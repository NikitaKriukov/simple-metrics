package nikita.simple.appl;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.util.concurrent.TimeUnit;


/**
 * Takes information about CUP load from internal system component with the help of JMX.
 */
public final class SystemCpuInfo {

    private static OperatingSystemMXBean os = ManagementFactory.getOperatingSystemMXBean();

    private int systemCpuLoad;

    // Be aware that the setter, getter and default constructor are necessary for JSON serialization.
    public int getSystemCpuLoad() {
        return systemCpuLoad;
    }

    public void setSystemCpuLoad(int systemCpuLoad) {
        this.systemCpuLoad = systemCpuLoad;
    }

    public static SystemCpuInfo getCpuInfo() {
        SystemCpuInfo systemCpuInfo = new SystemCpuInfo();
        systemCpuInfo.systemCpuLoad = (int) (((com.sun.management.OperatingSystemMXBean) os).getSystemCpuLoad() * 100);
        return systemCpuInfo;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder(20);
        sb.append("System CPU load: ").append(systemCpuLoad).append("%");
        return sb.toString();
    }

//    public static void main(String[] args) {
//
//        for (int i = 0; i < 100; i++) {
//            System.out.println(SystemCpuInfo.getCpuInfo());
//            try {
//                TimeUnit.SECONDS.sleep(1);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//        }
//
//        int threadsNum = 1;
//        ExecutorService executorService = Executors.newFixedThreadPool(threadsNum);
//        IntStream.range(0, threadsNum).forEach(threadN -> executorService.submit(() -> {
//            for (int i = 0; i < 100; i++) {
//                System.out.println(SystemCpuInfo.getCpuInfo());
//                try {
//                    TimeUnit.SECONDS.sleep(1);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//            }
//        }));
//        executorService.shutdown();
//    }

//    public static void main(String[] args) throws JsonProcessingException {
//        SystemCpuInfo cpuInfo = SystemCpuInfo.getCpuInfo();
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String resultJSON = objectMapper.writeValueAsString(cpuInfo);
//        System.out.println(resultJSON);
//    }

}
