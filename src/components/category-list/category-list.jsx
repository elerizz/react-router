import React from 'react';
import {CategoryListItem} from '../category-list-item';
import styles from './category-list.module.scss';

export const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <section class="CategoryList">
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category.idCategory} category={category} />
        ))}
      </ul>
    </section>
  );
};
