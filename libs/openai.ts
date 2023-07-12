import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-M5kN4TAaAszBVBXHhBt1ZGOG",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;
