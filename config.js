const sourcesUrl = "hsl-map-server:8080/map/v1/";

module.exports = {
  "/map/v1/finland-stop-map": {
    "source": `otpstops://${process.env.FINLAND_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  }
}
