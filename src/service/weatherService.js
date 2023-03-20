import axios from "axios";

class WeatherConpService {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=148f508fe5d9a656fc6efef7e2d98666&lang=en&units=metric`;
  async getByDtata(lat, lon) {
    try {
      const url = `${this.apiUrl}&lat=${lat}&lon=${lon}`;
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WeatherConpService();
