package nikita.simple.appl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("usage")
public class SystemUtilizationService {

    @GET
    @Path("cpu")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCpuUtilization() {
        try {
            return Response.ok(SystemCpuInfo.getCpuInfo()).build();
        } catch (Throwable ex) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).
                    entity(new ResponseError(ex.getMessage())).build();
        }
    }

    @GET
    @Path("memory")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMemoryUtilization() {
        try {
            // if (true) throw new RuntimeException("aaa");
            return Response.ok(MemoryInfo.getMemoryInfo()).build();
        } catch (Throwable ex) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).
                    entity(new ResponseError(ex.getMessage())).build();
        }
    }

    /**
     * Error response body message
     */
    static class ResponseError {
        String reason;

        public String getReason() {
            return reason;
        }

        public void setReason(String reason) {
            this.reason = reason;
        }

        public ResponseError() {
        }

        public ResponseError(String reason) {
            this.reason = reason;
        }
    }

}