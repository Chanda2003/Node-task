import React, { Component } from 'react';
import './style.css'; // Ensure to create this CSS file for custom styling

class FieldTemplateSearch extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>Field and Template Search</h1>
          <p>
            You can search for documents and folders, in the <a href="#">Search Pane</a>, by assigned template, field value, or multiple field values, using the field search type.
          </p>
          <p>
            The <a href="#">Quick Search</a> and <a href="#">Basic Search</a> types also let you search across all fields in the repository. Or, increase the power of your searches by using the <a href="#">advanced fields and templates search syntax</a>.
          </p>
          <p>
            To specify a field and value to search for, type the value you want to search for in the field. The search values you can input depend on the field type and any constraints on the field. For instance, you cannot search for alphabet characters in a number field, and if an administrator has constrained the phone number format that can be typed in a phone number field, you will not be able to type the number in a non-matching format. Likewise, when performing a Date, Time or Date/Time search, you will only be able to input date and time values that match the date and time formatting for that field.
          </p>
          <p>
            When searching on a date field, you can search for a date range. Learn about the <a href="#">types of date searches</a>.
          </p>
          <h2>To perform a field and/or template search</h2>
          <h3>To search by field value or template in the Laserfiche Windows client</h3>
          <ol>
            <li>In the <a href="#" alt="data">Search Pane</a>, click Customize Search and select Field Search.</li>
            <li>
              Choose the search you want to run by selecting one or both of the following:
              <ul>
                <li>To search by field, select Search across selected fields.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default FieldTemplateSearch;