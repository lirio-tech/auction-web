import axios from 'axios';

type Callback = (data: any) => void;
type ErrorCallback = (error: any) => void;

export default {
  signIn(username: string, password: string, callback: Callback, errorCallback: ErrorCallback) {
    const params = new URLSearchParams();
    params.append('client_id', 'auction-cli');
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    axios({
      method: 'post',
      url: `${import.meta.env.VITE_AUCTION_API_HOST}/realms/master/protocol/openid-connect/token`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params.toString()
    })
    .then(response => callback(response.data))
    .catch(error => errorCallback(error));
  }
};