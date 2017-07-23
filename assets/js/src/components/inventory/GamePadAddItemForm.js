import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import CheckboxOrRadioGroup from './gamepad/CheckboxOrRadioGroup';

var trueness = [true];
var CATEGORIES = ['Visual Art', 'Clothing', 'Accessories', 'Jewelry', 'Instruments', 'Totems'];
var ARTICLE_TYPES = ['Tops', 'Bottoms', 'Vests', 'Tutus'];


class GamePadAddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
			useAsDescription: [true],
			selectedCategory: [],
			selectedArticleTypes: []
		}

    this.handleUseAsDescriptionSelection = this.handleUseAsDescriptionSelection.bind(this);
		this.handleAddItemCategorySelection = this.handleAddItemCategorySelection.bind(this);
		this.handleAddItemArticleSelection = this.handleAddItemArticleSelection.bind(this);
  }


  handleUseAsDescriptionSelection(e) {
		const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var useAsDescription = this.state.useAsDescription;

		if (value) {
      useAsDescription = [true];
    } else {
      useAsDescription = [false];
    }

		this.setState({ useAsDescription });
	}


	handleAddItemCategorySelection(e) {
		this.setState({ selectedCategory: e.target.value });
	}


	handleAddItemArticleSelection(e) {
		const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(value);
    console.log(name);

		var selectedArticleTypes = this.state.selectedArticleTypes;

		if (value) {
      selectedArticleTypes.push(name);
    } else {
      var index = selectedArticleTypes.indexOf(name);
      selectedArticleTypes.splice(index, 1);
    }

		this.setState({ selectedArticleTypes });
	}


  render() {
    return (
      <div id="add_item_container" className={ this.props.isShowing ? "" : "hidden" }>

        <div className="inventory_gamepad_add_item_form">
          <h1 className="inventory_gamepad_content_window_title"> Add Item </h1>

          <div id="add_item_name_entry_container" className="form-group">
            <label id="add_item_name_entry_title" htmlFor="name">Name:</label>
            <Field id="add_item_name_entry_input" className="form-control" name="name" component="input" type="text" />
          </div>

          <div id="add_item_picture_reel_container"> Picture Reel</div>

          <div id="add_item_intention_statement_container" className="form-group">
            <label id="add_item_intention_statement_entry_title" htmlFor="intention_statement">Intention Statement:</label>
            <div id="add_item_intention_statement_entry_gist">
              Gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist
            </div>
            <Field id="add_item_intention_statement_entry_input" className="form-control" name="intention_statement" component="textarea" type="text" />
          </div>

          <div id="add_item_use_as_description_container">
              <CheckboxOrRadioGroup
                  id="add_item_use_as_description_checkbox"
                  controlFunc={this.handleUseAsDescriptionSelection}
                  type={'checkbox'}
                  options={trueness}
                  selectedOptions={this.state.useAsDescription} />
              <label id="add_item_use_as_description_label" htmlFor="use_as_description">Use as description?</label>
          </div>


          <div id="add_item_post_description_col_1">

            <div id="add_item_category_selection_container">
              <label id="add_item_category_selection_label" htmlFor="add_item_category_selection_radio">Category Selection:</label>
              <CheckboxOrRadioGroup
                  id="add_item_category_selection_radio_group"
                  setName={CATEGORIES}
                  controlFunc={this.handleAddItemCategorySelection}
                  type={'radio'}
                  options={CATEGORIES}
                  selectedOptions={this.state.selectedCategory} />
            </div>

            <div id="add_item_article_type_container"> Article Type
              <label id="add_item_article_type_selection_label" htmlFor="add_item_article_type_selection_radio">Article Type Selection:</label>
              <CheckboxOrRadioGroup
                  id="add_item_article_type_selection_radio_group"
                  setName={ARTICLE_TYPES}
                  controlFunc={this.handleAddItemArticleSelection}
                  type={'checkbox'}
                  options={ARTICLE_TYPES}
                  selectedOptions={this.state.selectedArticleTypes} />
            </div>

            <div id="add_item_article_time_log_container"> Time Log </div>

          </div>


          <div id="add_item_post_description_col_2">
            <div id="add_item_article_subcategory_tagging_container"> Subcategory Tagging </div>
            <div id="add_item_article_vibe_tagging_container"> Vibe Tagging </div>
            <div id="add_item_article_material_tagging_container"> Material Tagging </div>
            <div id="add_item_article_color_tagging_container"> Color Tagging </div>
            <div id="add_item_article_technique_tagging_container"> Technique Tagging </div>
            <div id="add_item_article_tag_tagging_container"> Tag Tagging </div>
          </div>

          <div id="add_item_description_statement_container"></div>

          <div id="add_item_article_sizing_container"> Sizing </div>
          <div id="add_item_article_pricing_container"> Pricing </div>
          <div id="add_item_article_shipping_container"> Shipping </div>
          <div id="add_item_article_placement_container"> Placement </div>

          <button id="add_item_submission_btn" className="btn btn-primary"> Submit </button>

        </div>
      </div>
  	);
  }
}

GamePadAddItemForm = reduxForm({
  form: 'GamePadAddItem'
})(GamePadAddItemForm)

export default GamePadAddItemForm;
