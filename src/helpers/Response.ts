const api = (res: any, status: number, msg: string, data: any[]) => {
      return res.status(status).json({
            msg: msg,
            data: data
      });
};

export default {
      api
};
