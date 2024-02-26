import { AddArticleModel } from '../models/article.model';
import { faker } from '@faker-js/faker/locale/pl';

export default function prepareRandomArticle(
  titleLength?: number,
  bodyParagraphs = 5,
): AddArticleModel {
  let title: string;

  if (titleLength) title = faker.string.alpha(titleLength);
  else title = faker.lorem.sentence();

  const body = faker.lorem.paragraphs(bodyParagraphs);

  const newArticle: AddArticleModel = { title: title, body: body };

  return newArticle;
}
