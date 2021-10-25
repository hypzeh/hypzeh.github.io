import { createPipeline } from '../pipeline';
import delay from './delay';

const pipeline = createPipeline([
  delay,
]);

const startup = async () => {
  await pipeline.execute({});
};

export default startup;
