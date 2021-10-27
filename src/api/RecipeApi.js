"use strict";

var recipes = require('./RecipeData').recipes;
var _ = require('loadash');
var _generatedId = function (recipe) {
    return recipe.category.toLowerCase() + '-' + recipe.recipeName;
};

var _clonMe = function (item) {
    return JSON.parse(JSON.stringify(item));
};

var RecipeAPI = {
    getAllRecipes: function () {
        return _clonMe(recipes);
    },
    getRecipeById: function (id) {
        var recipe = _.find(recipes, {
            id: id
        });
        return _clonMe(recipe);
    },

    saveRecipe: function (recipe) {
        console.log('AJAX call saved recipe to the _');
        if (recipe.id) {
            var existingRecipeIndex = _.indexOf(recipes, _.find(recipes));
            recipes.splice(existingRecipeIndex, 1, recipe);
        } else {
            recipe.id = _generatedId(recipe);
            recipes.push(_clonMe(recipe));
        }
        return recipes;
    },

    deleteRecipe: function (id) {
        console.log('AJAX call deleted recipe from the _');
        _.remove(recipes, {
            id: id
        });
    }
};

module.exports = RecipeAPI;