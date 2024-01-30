import { post } from '../utils/httpInterceptor';
import { notification } from "antd";



export const statusRuleEngine = async (data) => {
    const response = await post(`/pl/ruleengineapi/ruleEngine`, {
      ...data,
    });
    if (!response.data.error) {
      // notification.success({ message: response.data.message });
      return response;
    } else {
      // notification.error({ message: response.data.message });
      return response;
    }
  };
  