import CategoryItem from "../category-item/category-item.component";

import './directory.scss';

import React from 'react'

 const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
{
  
  categories.map( (category) => (
  <CategoryItem Key ={category.id} category ={category} />

   ) )
}
    </div>
  );
}
  
export default Directory;

