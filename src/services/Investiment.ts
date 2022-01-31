import api from './api';

interface responseProps {
  data: [];
  ok: boolean;
  message?: string;
  code?: string;
}

export default async function Investiment() {
  return api
    .get('/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653')
    .then(async response => {
      if (response.data.response.status) {
        return <responseProps>{
          data: response.data.response.data.listaInvestimentos,
          ok: true,
        };
      }
      return <responseProps>{
        ok: false,
        message: response.data.response.status || 'Erro',
      };
    })
    .catch(
      error =>
        <responseProps>{
          ok: false,
          message: error.response.data.response.status,
          code: error.response.data.response.status,
        },
    );
}
