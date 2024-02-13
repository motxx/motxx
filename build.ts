import fs from "node:fs/promises";
import { toSSG } from "hono/ssg";
import app from "./src/index";

toSSG(app, fs);
