import React from 'react';
import styled from 'styled-components';

import { Scroller } from '../../shared';

const Container = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  margin: .5rem;
`;

const placeholder = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at justo mi. Praesent a nisl ut nunc facilisis dictum vel quis metus. In sed dui lobortis, tempus nisi eget, tincidunt odio. Ut tincidunt ac turpis sit amet efficitur. Sed iaculis blandit efficitur. Sed ac aliquam ex. Fusce pretium efficitur facilisis. Sed non urna ut nibh faucibus finibus accumsan convallis risus.',
  'Nulla mi lorem, faucibus id tempor sit amet, posuere viverra urna. Phasellus magna ipsum, aliquet sed dui euismod, semper posuere lectus. Morbi non placerat elit. Integer ut orci nec mi facilisis finibus. Morbi nec nunc diam. Etiam condimentum lectus ut urna gravida lacinia. Nam quis dui sit amet ex dignissim euismod. Nulla varius consectetur nunc non ornare.',
  'Mauris aliquam lorem suscipit lorem ornare, non pellentesque libero dapibus. Proin blandit neque eget sapien pharetra maximus. In sit amet elit nec purus iaculis venenatis ut sit amet ipsum. Nullam fermentum est risus, ac fermentum elit ullamcorper quis. Curabitur augue risus, vehicula in lorem sed, commodo congue magna. Donec euismod venenatis erat, ac sodales mauris scelerisque nec. Curabitur rutrum fringilla justo, vel sagittis erat vulputate sit amet. Aenean faucibus risus sapien, lacinia porttitor urna fermentum convallis. Fusce ex magna, pretium ut pretium vitae, posuere in sapien.',
];

const Page = () => (
  <Container>
    <Scroller>
      <Content>
        <h1>Title...</h1>
        {placeholder.map(text => (<p key={text.slice(0, 5)}>{text}</p>))}
      </Content>
    </Scroller>
  </Container>
);

export default Page;
