
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { footerComponent } from './footer/footer.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import { RecipeService } from './recipes/recipeService/recipe.service';
import { ShoppingService } from './shopping-list/shoppingService/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  