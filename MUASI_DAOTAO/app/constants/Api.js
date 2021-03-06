import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';//lưu dữ liệu xuống ổ cứng
import NavigationUtil from "../navigation/NavigationUtil";
import I18n from "../i18n/i18n";

function createAxios() {
  // AsyncStorage.setItem("token", '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = "http://toimuonmuasi.com/api/";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };
  axiosInstant.interceptors.request.use(
    async config => {
      config.headers.token = await AsyncStorage.getItem("token");
      return config;
    },
    error => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(response => {
    if (response.data && response.data.code == 403) {
      setTimeout(() => {
        Alert.alert("Thông báo", I18n.t("relogin"));
      }, 100);

      AsyncStorage.setItem("token", "", () => {
        NavigationUtil.navigate("Auth");
      });
    } else if (response.data && response.data.status != 1) {
      setTimeout(() => {
        Alert.alert("Thông báo", response.data.message);
      }, 100);
    }
    return response;
  });
  return axiosInstant;
}

export const getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then(res => {
    if (res.data.status != 1) {
      return Promise.reject(new Error("Co loi xay ra"));
    }
    return Promise.resolve(res.data);
  });
}

export const requestLogin = payload => {
  return handleResult(
    getAxios.post('Login', payload)
  );
};
export const requestRegister = payload => {
  return handleResult(
    getAxios.post('Register', payload)
  );
};

export const requestHomeData = () => {
  return handleResult(
    getAxios.get(`/GetHome`)
  );
};
export const notifyData = (deviceID = "") => {
  return handleResult(
    getAxios.get(`GetNotification`, {
      params: {
        page: 1
      }
    })
  );
};
export const requestUser = () => {
  return handleResult(
    getAxios.get('/GetUserInfo')
  );
};
export const UpdateUser = payload => {
  return handleResult(
    getAxios.post('/UpdateUser', payload)
  );
};
export const Logout = () => {
  return handleResult(
    getAxios.get('/Logout')
  );
};
export const ChangePass = payload => {
  return handleResult(
    getAxios.post('/ChangePass', payload)
  )
}
export const ListPost = () => {
  return handleResult(
    getAxios.get('ListPost', {
      params:
      {
        page: 1,
        type: 1
      }

    })
  );
};
export const ListKeyword = () => {
  return handleResult(
    getAxios.get('/ListKeyword')
  );
};
export const GetNotification = () => {
  return handleResult(
    getAxios.get('/GetNotification')
  );
};
export const UpdateStatus = payload => {
  return handleResult(
    getAxios.post('/UpdateStatusPost', payload)
  )
}

