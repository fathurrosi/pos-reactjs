import React, { Component } from 'react';
import TreeView from 'react-jstree-table';
import 'jstree/dist/themes/default/style.css';
import 'assets/styles/custom.css';

const data = {
    text: "ROOT",
    state: { "opened": "true" },
    data: {},
    "children": [
        {
            "children": [
                {
                    "children": [
                        {
                            text: "BBBBBBB BBBBB",
                            state: { "opened": "true" },
                            data: {
                                "AllowCreate": "false",
                                "AllowRead": "true",
                                "AllowDelete": "true",
                                "AllowPrint": "true"
                            },
                            "children": [
                                {
                                    state: { "opened": "true" },
                                    "children": [
                                        {
                                            "children": [],
                                            text: "CCCC CCCCC",
                                            state: { "opened": "true" },
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            },
                                        }
                                    ],
                                    text: "DDDD DDDDDD",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                },
                                {
                                    "children": [
                                        {
                                            "children": [
                                                {
                                                    "children": [
                                                        {
                                                            text: "EEEEE 1",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }, {
                                                            text: "EEEEE 2",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        },
                                                        {
                                                            text: "EEEEE 3",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }
                                                    ],
                                                    text: "EEEEE EEEEE",
                                                    state: { "opened": "true" },
                                                    data: {
                                                        "AllowCreate": "false",
                                                        "AllowRead": "true",
                                                        "AllowDelete": "true",
                                                        "AllowPrint": "true"
                                                    },
                                                },

                                            ],
                                            state: { "opened": "true" },
                                            text: "FFFF FFFFFF",
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            }
                                        }
                                    ],
                                    state: { "opened": "true" },
                                    text: "GGGG GGGGG",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                }
                            ]
                        }
                    ],
                    state: { "opened": "true" },
                    text: "HHHH HHHH hhhh",
                    data: {
                        "AllowCreate": "false",
                        "AllowRead": "true",
                        "AllowDelete": "true",
                        "AllowPrint": "true"
                    }

                }
            ],
            state: { "opened": "true" },
            text: "KKKKK KKKKK",
            data: {
                "AllowCreate": "false",
                "AllowRead": "true",
                "AllowUpdate": 20.50,
                "AllowDelete": "true",
                "AllowPrint": "true",
                "Column_06": 99.2495831017,
                "Column_07": "true"
            },

        },
        {
            "children": [
                {
                    "children": [
                        {
                            text: "BBBBBBB BBBBB",
                            state: { "opened": "true" },
                            data: {
                                "AllowCreate": "false",
                                "AllowRead": "true",
                                "AllowDelete": "true",
                                "AllowPrint": "true"
                            },
                            "children": [
                                {
                                    state: { "opened": "true" },
                                    "children": [
                                        {
                                            "children": [],
                                            text: "CCCC CCCCC",
                                            state: { "opened": "true" },
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            },
                                        }
                                    ],
                                    text: "DDDD DDDDDD",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                },
                                {
                                    "children": [
                                        {
                                            "children": [
                                                {
                                                    "children": [
                                                        {
                                                            text: "EEEEE 1",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }, {
                                                            text: "EEEEE 2",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        },
                                                        {
                                                            text: "EEEEE 3",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }
                                                    ],
                                                    text: "EEEEE EEEEE",
                                                    state: { "opened": "true" },
                                                    data: {
                                                        "AllowCreate": "false",
                                                        "AllowRead": "true",
                                                        "AllowDelete": "true",
                                                        "AllowPrint": "true"
                                                    },
                                                },

                                            ],
                                            state: { "opened": "true" },
                                            text: "FFFF FFFFFF",
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            }
                                        }
                                    ],
                                    state: { "opened": "true" },
                                    text: "GGGG GGGGG",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                }
                            ]
                        }
                    ],
                    state: { "opened": "true" },
                    text: "HHHH HHHH hhhh",
                    data: {
                        "AllowCreate": "false",
                        "AllowRead": "true",
                        "AllowDelete": "true",
                        "AllowPrint": "true"
                    }

                }
            ],
            state: { "opened": "true" },
            text: "KKKKK KKKKK",
            data: {
                "AllowCreate": "false",
                "AllowRead": "true",
                "AllowUpdate": 20.50,
                "AllowDelete": "true",
                "AllowPrint": "true",
                "Column_06": 99.2495831017,
                "Column_07": "TRUE"
            },

        },
        {
            "children": [
                {
                    "children": [
                        {
                            text: "BBBBBBB BBBBB",
                            state: { "opened": "true" },
                            data: {
                                "AllowCreate": "false",
                                "AllowRead": "true",
                                "AllowDelete": "true",
                                "AllowPrint": "true"
                            },
                            "children": [
                                {
                                    state: { "opened": "true" },
                                    "children": [
                                        {
                                            "children": [],
                                            text: "CCCC CCCCC",
                                            state: { "opened": "true" },
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            },
                                        }
                                    ],
                                    text: "DDDD DDDDDD",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                },
                                {
                                    "children": [
                                        {
                                            "children": [
                                                {
                                                    "children": [
                                                        {
                                                            text: "EEEEE 1",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }, {
                                                            text: "EEEEE 2",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        },
                                                        {
                                                            text: "EEEEE 3",
                                                            state: { "opened": "true" },
                                                            data: {
                                                                "AllowCreate": "false",
                                                                "AllowRead": "true",
                                                                "AllowDelete": "true",
                                                                "AllowPrint": "true"
                                                            },
                                                        }
                                                    ],
                                                    text: "EEEEE EEEEE",
                                                    state: { "opened": "true" },
                                                    data: {
                                                        "AllowCreate": "false",
                                                        "AllowRead": "true",
                                                        "AllowDelete": "true",
                                                        "AllowPrint": "true"
                                                    },
                                                },

                                            ],
                                            state: { "opened": "true" },
                                            text: "FFFF FFFFFF",
                                            data: {
                                                "AllowCreate": "false",
                                                "AllowRead": "true",
                                                "AllowDelete": "true",
                                                "AllowPrint": "true"
                                            }
                                        }
                                    ],
                                    state: { "opened": "true" },
                                    text: "GGGG GGGGG",
                                    data: {
                                        "AllowCreate": "false",
                                        "AllowRead": "true",
                                        "AllowDelete": "true",
                                        "AllowPrint": "true"
                                    },
                                }
                            ]
                        }
                    ],
                    state: { "opened": "true" },
                    text: "HHHH HHHH hhhh",
                    data: {
                        "AllowCreate": "false",
                        "AllowRead": "true",
                        "AllowDelete": "true",
                        "AllowPrint": "true"
                    }

                }
            ],
            state: { "opened": "true" },
            text: "KKKKK KKKKK",
            data: {
                "AllowCreate": "false",
                "AllowRead": "true",
                "AllowUpdate": 20.50,
                "AllowDelete": "true",
                "AllowPrint": "true"
            },

        }

    ]
};

export class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                plugins: ["table"],
                table: {
                    row_class: (row) => {
                        return row.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
                    },
                    columns: [
                        { width: 500, header: "Menu" },
                        { value: "AllowCreate", header: "Allow Create", format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; } },
                        { value: "AllowRead", header: "Allow Read", format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; } },
                        { value: "AllowUpdate", header: "Allow Update", format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; } },
                        { value: "AllowDelete", header: "Allow Delete", format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; } },
                        {
                            value: "AllowPrint",
                            header: "Allow Print",
                            format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; }
                        },
                        // { width: 150, value: "Column_06", header: "Column_06" , format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; }},
                        // {
                        //     width: 150,
                        //     value: "Column_07",
                        //     header: "Column_07",
                        //     format: (v) => { return `<input type="checkbox" ${v ? 'checked' : ''}  />`; }
                        // }
                    ],
                    resizable: false,
                    draggable: false,
                    contextmenu: false,
                    width: window.innerWidth - 20,
                    height: window.innerHeight - 20

                },
                core: {
                    data: data,
                    check_callback: true
                }
            },
            selected: [],
        };
    }

    handleClick() {
        // const newData = this.state.data.core.data[0].children.slice();
        // newData.push({ text: 'New child node' });
        // this.setState({
        //     data: {
        //         plugins: ["table", "dnd", "contextmenu"],
        //         table: {
        //             columns: [
        //                 { width: 500, header: "Name" },
        //                 { width: 150, value: "AllowCreate", header: "AllowCreate" },
        //                 { width: 150, value: "AllowRead", header: "AllowRead", format: function (v) { if (v) { return v.toFixed(2) + '%' } } },
        //                 { width: 150, value: "AllowUpdate", header: "AllowUpdate" },
        //                 { width: 150, value: "AllowDelete", header: "AllowDelete" },
        //                 { width: 150, value: "AllowPrint", header: "AllowPrint", format: function (v) { if (v) { return v.toFixed(2) + '%' } } },
        //                 { width: 150, value: "Column_06", header: "Column_06" },
        //                 { width: 150, value: "Column_07", header: "Column_07" },
        //             ],
        //             resizable: true,
        //             draggable: true,
        //             contextmenu: true,
        //             width: window.innerWidth - 20,
        //             height: window.innerHeight - 20

        //         },
        //         core: {
        //             data: [
        //                 {
        //                     text: 'Root node', children: newData
        //                 }
        //             ]
        //         }
        //     }
        // });
    }

    handleChange(e, data) {
        this.setState({
            selected: data.selected,
        })

        // let jsonString = JSON.stringify(data.selected);
        // alert(jsonString);
    }


    render() {
        const data = this.state.data;
        return (
            <div>
                <button onClick={() => this.handleClick()}>Add node</button>
                <br /><br />
                <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
                <br />
                <p>Selected nodes: {this.state.selected.join(', ')}</p>
            </div>
        );
    }
}



// import React, { useState } from 'react';
// import TreeView from 'react-jstree-table';

// const data = [
//   {
//     id: 1,
//     name: 'Node 1',
//     checked: false, // Add a checked state to your data
//     children: [
//       { id: 2, name: 'Child 1', checked: true },
//       { id: 3, name: 'Child 2', checked: false },
//     ],
//   },
//   // ... more data
// ];

// const Test = () => {
//   const [treeData, setTreeData] = useState(data);

//   // Function to handle checkbox state changes
//   const handleCheckboxChange = (nodeId) => {
//     // Logic to update the `checked` state in your treeData based on `nodeId`
//     // This will involve mapping over the data and immutably updating the specific node.
//     // (Implementation of the deep update logic is required here)
//     console.log(`Checkbox clicked for node: ${nodeId}`);
//   };

//   const columns = [
//     {
//       title: 'Select',
//       // Define a custom cell renderer for the checkbox column
//       render: (node) => (
//         <input
//           type="checkbox"
//           checked={node.checked || false} // Use the checked state from your data
//           onChange={() => handleCheckboxChange(node.id)}
//         />
//       ),
//       width: 50,
//     },
//     {
//       title: 'Name',
//       data: 'name', // This will be the main tree column
//       tree: true, // Designate this as the tree column
//     },
//     // ... other columns
//   ];

//   return (
//     <TreeView
//       data={treeData}
//       columns={columns}
//       // other props like keyField, expandField, etc.
//       keyField="id"
//       expandField="children"
//     />
//   );
// };

// export { Test};
