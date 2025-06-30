const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $30', 'Pasta - $18.5', 'Burger - $14.75', 'Salmon - $25.99'];
const dessertMenu = ['Cake - $8.5', 'Ice Cream - $7', 'Pudding - $6.5', 'Fruit Salad - $5'];


document.getElementById('breakfastTotalItems').innerHTML = `Total : ${breakfastMenu.length} articles`;
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Article ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


document.getElementById('maincourseTotalItems').innerHTML = `Total : ${mainCourseMenu.length} articles`;
let mainCourseHTML = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseHTML += `<p>Article ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseHTML;


document.getElementById('dessertTotalItems').innerHTML = `Total : ${dessertMenu.length} articles`;
let dessertHTML = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertHTML += `<p>Article ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertHTML;
