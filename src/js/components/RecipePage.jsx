"use strici";
var React = require("react");
var RecipeApi = require("../../api/RecipeApi");
var createdReactClass = require("create-react-class");

var Recipes = createdReactClass({
  render: function () {
    var createRecipeRow = function (recipe) {
      return (
        <tr key={recipe.id}>
          <td>
            <a href={"/#recipe" + recipe.id}>{recipe.id}</a>
          </td>
          <td>
            <a href={"/#recipe" + recipe.id}>{recipe.recipeName}</a>
          </td>
        </tr>
      );
    };

    return (
      <div>
        <h1>Our Recipes</h1>
        <table className="table table-hover">
          <thead>
            <th>ID</th>
            <th>Recipe Name</th>
          </thead>
          <tbody>
            <td></td>
          </tbody>
        </table>
      </div>
    );
  },
});

module.exports = Recipes;
