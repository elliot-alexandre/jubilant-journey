import { name, version } from "../package.json";

const index = (req: any, res: any) => {
  res.json({
    name,
    version,
  });
};

export default index;
