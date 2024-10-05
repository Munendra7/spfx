import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'DisplaydataWebPartStrings';
import Displaydata from './components/Displaydata';
import { IDisplaydataProps } from './components/IDisplaydataProps';

import "../../webparts/displaydata/components/style.css"

export interface IDisplaydataWebPartProps {
  description: string;
}

export default class DisplaydataWebPart extends BaseClientSideWebPart<IDisplaydataWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDisplaydataProps> = React.createElement(
      Displaydata,
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
