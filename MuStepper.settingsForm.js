import baseEditForm from "formiojs/components/_classes/component/Component.form";

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: [
          {
            key: "label",
            // ignore: true,
          },
          {
            key: "disabled",
            defaultValue: true,
          },
          {
            key: "tabindex",
            ignore: true,
          },
          {
            key: "placeholder",
            ignore: true,
          },
          {
            key: "labelPosition",
            // ignore: true,
          },
          {
            key: "customClass",
            weight: 100,
            ignore: true,
          },
          {
            weight: 320,
            type: "textfield",
            input: true,
            key: "prefix",
            label: "Prefix",
            ignore: true,
          },
          {
            weight: 330,
            type: "textfield",
            input: true,
            key: "suffix",
            label: "Suffix",
            ignore: true,
          },
          {
            weight: 410,
            type: "textfield",
            input: true,
            key: "inputMask",
            label: "Input Mask",
            tooltip:
              "An input mask helps the user with input by ensuring a predefined format.<br><br>9: numeric<br>a: alphabetical<br>*: alphanumeric<br><br>Example telephone mask: (999) 999-9999<br><br>See the <a target='_blank' href='https://github.com/RobinHerbots/jquery.inputmask'>jquery.inputmask documentation</a> for more information.</a>",
            ignore: true,
          },
          {
            weight: 420,
            type: "textfield",
            input: true,
            key: "maskChar",
            label: "Mask character",
            defaultValue: "_",
            tooltip: 'Character to cover unfilled parts of the mask. Default character is "_".',
            ignore: true,
          },
          {
            type: "checkbox",
            input: true,
            key: "inline",
            label: "Inline Layout",
            defaultValue: true,
            tooltip: "Displays the steppes horizontally.",
            weight: 430,
          },
          {
            type: "checkbox",
            input: true,
            key: "rtl",
            label: "Right To Left",
            defaultValue: true,
            tooltip: "For Right to left component",
            weight: 430,
          },
          {
            type: "checkbox",
            input: true,
            key: "descriptionTooltip",
            label: "Description Tooltip",
            defaultValue: true,
            tooltip: "for Enable or disable tooltip  description in steps",
            weight: 440,
          },
          {
            type: "checkbox",
            input: true,
            key: "alternativeLabel",
            label: "Alternative Label",
            defaultValue: true,
            tooltip: "for Enable or disable Alternative Label in steps",
            weight: 450,
          },
          {
            key: "tableView",
            ignore: true,
          },
          {
            key: "modalEdit",
            ignore: true,
          },
          {
            key: "autofocus",
            ignore: true,
          },
          {
            type: "select",
            input: true,
            weight: 0,
            tooltip: "select a color for active and completed steps",
            key: "colorStep",
            defaultValue: "Default System",
            label: "Step Color Picker",
            dataSrc: "values",
            data: {
              values: [
                {
                  label: "Default System",
                  value: "#3B5998",
                },
                {
                  label: "Primary",
                  value: "#1976d2",
                },
                {
                  label: "Dark Primary",
                  value: "#115293",
                },
                {
                  label: "Light Primary",
                  value: "#4791db",
                },
                {
                  label: "Secondary",
                  value: "#dc004e",
                },
                {
                  label: "Dark Secondary",
                  value: "#9a0036",
                },
                {
                  label: "Light Secondary",
                  value: "#e33371",
                },
                {
                  label: "Error",
                  value: "#f44336",
                },
                {
                  label: "Dark Error",
                  value: "#d32f2f",
                },
                {
                  label: "Light Error",
                  value: "#e57373",
                },
                {
                  label: "Warning",
                  value: "#ff9800",
                },
                {
                  label: "Dark Warning",
                  value: "#f57c00",
                },
                {
                  label: "Light Warning",
                  value: "#ffb74d",
                },
                {
                  label: "Info",
                  value: "#2196f3",
                },
                {
                  label: "Dark Info",
                  value: "#1976d2",
                },
                {
                  label: "Light Info",
                  value: "#64b5f6",
                },
                {
                  label: "Success",
                  value: "#4caf50",
                },
                {
                  label: "Dark Success",
                  value: "#388e3c",
                },
                {
                  label: "Light Success",
                  value: "#81c784",
                },
              ],
            },
          },
          {
            type: "select",
            input: true,
            weight: 0,
            tooltip: "select a position for alignment tooltip",
            key: "tooltipPosition",
            defaultValue: "top-start",
            label: "Tooltip Position",
            dataSrc: "values",
            data: {
              values: [
                {
                  label: "Top Start",
                  value: "top-start",
                },
                {
                  label: "Top",
                  value: "top",
                },
                {
                  label: "Top End",
                  value: "top-end",
                },
                {
                  label: "Left Start",
                  value: "left-start",
                },
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Left End",
                  value: "left-end",
                },
                {
                  label: "Right Start",
                  value: "right-start",
                },
                {
                  label: "Right",
                  value: "right",
                },
                {
                  label: "Right End",
                  value: "right-end",
                },
                {
                  label: "Bottom Start",
                  value: "bottom-start",
                },
                {
                  label: "Bottom",
                  value: "bottom",
                },
                {
                  label: "Bottom End",
                  value: "bottom-end",
                },
              ],
            },
          },
        ],
      },
      {
        key: "data",
        components: [
          {
            key: "multiple",
            ignore: true,
          },
          {
            key: "protected",
            ignore: true,
          },
          {
            key: "dbIndex",
            ignore: true,
          },
          {
            key: "encrypted",
            ignore: true,
          },
          {
            key: "clearOnHide",
            ignore: true,
          },
          {
            key: "calculateServer",
            ignore: true,
          },
          {
            key: "allowCalculateOverride",
            ignore: "true",
          },
          {
            key: "defaultValue",
            ignore: true,
          },
          {
            key: "show",
            type: "checkbox",
            label: "ShowCustomize",
            weight: 10,
          },
          {
            type: "select",
            input: true,
            weight: 0,
            tooltip:
              "The source to use for the select data. Values lets you provide your own values and labels. JSON lets you provide raw JSON data. URL lets you provide a URL to retrieve the JSON data from.",
            key: "dataSrc",
            defaultValue: "stepGridValues",
            label: "Data Source Type",
            dataSrc: "values",
            data: {
              values: [
                {
                  label: "Values",
                  value: "stepGridValues",
                },
                {
                  label: "Component Data",
                  value: "stepComponentData",
                },
              ],
            },
          },
          {
            type: "textfield",
            input: true,
            key: "stepComponentData",
            label: "select Component Data",
            weight: 16,
            tooltip: "Enter the name of a component whose data is an array",
            conditional: {
              json: {
                "===": [
                  {
                    var: "data.dataSrc",
                  },
                  "stepComponentData",
                ],
              },
            },
          },
          {
            type: "datagrid",
            input: true,
            label: "Request Headers",
            key: "stepGridValues",
            tooltip:
              "Set any headers that should be sent along with the request to the url. This is useful for authentication.",
            weight: 10,
            components: [
              {
                label: "Label",
                key: "label",
                input: true,
                type: "textfield",
              },
              {
                label: "Description",
                key: "description",
                input: true,
                type: "textfield",
              },
            ],
            customConditional: "show=(!data.show && (data.dataSrc =='stepGridValues'))",
          },
          {
            type: "datagrid",
            input: true,
            label: "Request Headers",
            key: "stepGridCustomValues",
            tooltip:
              "Set any headers that should be sent along with the request to the url. This is useful for authentication.",
            weight: 10,
            components: [
              {
                label: "Label",
                key: "label",
                input: true,
                type: "textfield",
              },
              {
                label: "Description",
                key: "description",
                input: true,
                type: "textfield",
              },
              {
                label: "Font Awesome Class Icon",
                key: "classIcon",
                input: true,
                type: "textfield",
              },
            ],
            customConditional: "show=(data.show && (data.dataSrc =='stepGridValues'))",
          },
        ],
      },
      {
        key: "validation",
        components: [],
      },
      {
        key: "api",
        components: [],
      },
      {
        key: "conditional",
        components: [],
      },
      {
        key: "logic",
        components: [],
      },
      {
        key: "layout",
        components: [],
      },
    ],
    ...extend
  );
};
