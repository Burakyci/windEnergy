import axios from "axios";
import { OperationResult } from "../models/common-model";

class WeatherService {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=148f508fe5d9a656fc6efef7e2d98666&lang=en&units=metric`;
  async getByDtata(lat, lon) {
    try {
      const url = `${this.apiUrl}&lat=${lat}&lon=${lon}`;
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return new OperationResult({
        success: true,
        message: error.message,
      });
    }
  }
}

export default new WeatherService();
