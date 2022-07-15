import React from 'react';
import {
  ArticleWrapper, ContentWrapper,
  NewsSectionHeader,
  TitleWrapper,
  Wrapper
} from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from '../../atoms/Button/Button';

const data = [
  {
    title: 'New computers at school1',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl magna, lacinia eget condimentum quis, tristique sit amet diam. Aenean porta orci fermentum mauris pharetra iaculis. Nulla facilisi. Nam tincidunt sem sed mauris dictum, sed venenatis nisl aliquam. Duis accumsan semper libero, ac convallis felis accumsan ut. Phasellus et ante a nunc vestibulum interdum.',
  },
  {
    title: 'New computers at schoolson2',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl magna, lacinia eget condimentum quis, tristique sit amet diam. Aenean porta orci fermentum mauris pharetra iaculis. Nulla facilisi. Nam tincidunt sem sed mauris dictum, sed venenatis nisl aliquam. Duis accumsan semper libero, ac convallis felis accumsan ut. Phasellus et ante a nunc vestibulum interdum.',
    image: 'https://unsplash.it/500/400/',
  },
  {
    title: 'New computers at schoolson3',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl magna, lacinia eget condimentum quis, tristique sit amet diam. Aenean porta orci fermentum mauris pharetra iaculis. Nulla facilisi. Nam tincidunt sem sed mauris dictum, sed venenatis nisl aliquam. Duis accumsan semper libero, ac convallis felis accumsan ut. Phasellus et ante a nunc vestibulum interdum.',
  },

]

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="article image" /> : null}
          </ContentWrapper>
          <Button isBig>click me</Button>
        </ArticleWrapper>
      ))}

    </Wrapper>
  );
};

export default NewsSection;