import axiosInstance from './Axios'

const signin = (data) => {
   return axiosInstance.post( "/signin", data );
}

export default { signin };
