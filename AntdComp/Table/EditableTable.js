// import  { Table, Input, Button, Popconfirm, Form } from 'antd';
import React, { Component } from 'react';
import './companyDetail-basicInfo.less';
import cloneDeep from 'lodash/cloneDeep';
import { Icon } from 'antd';

// const EditableContext = React.createContext();
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
import { Table, Input, Button, Popconfirm, Form, Popover, Checkbox } from "antd";
const {TextArea} =Input;
const EditableContext = React.createContext();

// cloneDeep

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0, padding: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          // onPressEnter={this.save}
          <TextArea
            className="editCellInput"
            ref={node => (this.input = node)}
            rows={1}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
            children
          )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    const aliAG=(
      <div>
        对标阿里 <Button  type="link" onClick={()=>{window.open('https://www.bomayu.com/question?id=4')}} style={{marginLeft:30,height:'22px',background:'#FF7A45',color:'white',border:'none'}}>查看详情</Button>
      </div>
    )
    this.columns = [
      {
        title: '客户（'+this.props.name+'）',
        dataIndex: "costmer",
        width: "30%",
        editable: true,
        className: 'tableCostmerHead',
        children: [
          {
            title: "技术序列",
            dataIndex: "techList",
            // editable: true,
            className: 'tableCostmerHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "techList",
              title: "技术序列",
              handleSave: this.handleSave
            })
          },
          {
            title: "管理序列",
            dataIndex: "manageList",
            className: 'tableCostmerHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "manageList",
              title: "管理序列",
              handleSave: this.handleSave
            })
          }, {
            title: "现金",
            dataIndex: "cash",
            className: 'tableCostmerHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "cash",
              title: "现金",
              handleSave: this.handleSave
            })
          }, {
            title: "股票/期权",
            dataIndex: "share",
            className: 'tableCostmerHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "share",
              title: "股票/期权",
              handleSave: this.handleSave
            })
          }, {
            title: "Total",
            dataIndex: "total",
            className: 'tableCostmerHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "total",
              title: "Total",
              handleSave: this.handleSave
            })
          }
        ]
      }, {
        title: aliAG,
        dataIndex: "aliAG",
        width: "30%",
        className: 'tableAGHead',
        editable: true,
        children: [
          {
            title: "技术序列",
            dataIndex: "techListAG",
            className: 'tableAGHeadChild',
            // editable: true,
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "techListAG",
              title: "技术序列",
              handleSave: this.handleSave
            })
          },
          {
            title: "管理序列",
            dataIndex: "manageListAG",
            className: 'tableAGHeadChild',
            onCell: record => ({
              record,
              editable: true,
              dataIndex: "manageListAG",
              title: "管理序列",
              handleSave: this.handleSave
            })
          }
        ]
      },
      {
        title: "删除记录",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="确定删除本条记录?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          ) : null
      }
    ]
      this.state = {
        dataSource: [
          {
            key: "0",
            techList: 'T/P3 高级工程师',
            manageList: 'M1',
            cash: '25-40k',
            share: '25-40k',
            total: '30-40w',
            techListAG: '对标T/P3 高级工程师',
            manageListAG: '对标M1',
          },
          {
            key: "1",
            techList: 'T/P3 高级工程师',
            manageList: 'M1',
            cash: '25-40k',
            share: '25-40k',
            total: '30-40w',
            techListAG: '对标T/P3 高级工程师',
            manageListAG: '对标M1',
          },
          {
            key: "2",
            techList: 'T/P3 高级工程师',
            manageList: 'M1',
            cash: '25-40k',
            share: '25-40k',
            total: '30-40w',
            techListAG: '对标T/P3 高级工程师',
            manageListAG: '对标M1',
          }
        ],
        columns: [
          {
            title: '客户（'+this.props.name+'）',
            dataIndex: "costmer",
            width: "30%",
            editable: true,
            className: 'tableCostmerHead',
            children: [
              {
                title: "技术序列",
                dataIndex: "techList",
                // editable: true,
                className: 'tableCostmerHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "techList",
                  title: "技术序列",
                  handleSave: this.handleSave
                })
              },
              {
                title: "管理序列",
                dataIndex: "manageList",
                className: 'tableCostmerHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "manageList",
                  title: "管理序列",
                  handleSave: this.handleSave
                })
              }, {
                title: "现金",
                dataIndex: "cash",
                className: 'tableCostmerHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "cash",
                  title: "现金",
                  handleSave: this.handleSave
                })
              }, {
                title: "股票/期权",
                dataIndex: "share",
                className: 'tableCostmerHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "share",
                  title: "股票/期权",
                  handleSave: this.handleSave
                })
              }, {
                title: "Total",
                dataIndex: "total",
                className: 'tableCostmerHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "total",
                  title: "Total",
                  handleSave: this.handleSave
                })
              }
            ]
          }, {
            title: aliAG,
            dataIndex: "aliAG",
            width: "30%",
            className: 'tableAGHead',
            editable: true,
            children: [
              {
                title: "技术序列",
                dataIndex: "techListAG",
                className: 'tableAGHeadChild',
                // editable: true,
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "techListAG",
                  title: "技术序列",
                  handleSave: this.handleSave
                })
              },
              {
                title: "管理序列",
                dataIndex: "manageListAG",
                className: 'tableAGHeadChild',
                onCell: record => ({
                  record,
                  editable: true,
                  dataIndex: "manageListAG",
                  title: "管理序列",
                  handleSave: this.handleSave
                })
              }
            ]
          },
          {
            title: "删除记录",
            dataIndex: "operation",
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm
                  title="确定删除本条记录?"
                  onConfirm={() => this.handleDelete(record.key)}
                >
                  <a href="javascript:;">删除</a>
                </Popconfirm>
              ) : null
          }
        ],
        count: 3,
        tableConfig: [
          {
            label: '显示技术序列',
            value: 'techList',
            checked: true,
            level: 1,
            index: 0
          },
          {
            label: '显示管理序列',
            value: 'manageList',
            checked: true,
            level: 1,
            index: 1
          },
          {
            label: '显示现金',
            value: 'cash',
            checked: true,
            level: 1,
            index: 2
          },
          {
            label: '显示股票期权',
            value: 'share',
            checked: true,
            level: 1,
            index: 3
          },
          {
            label: '显示Total',
            value: 'total',
            checked: true,
            level: 1,
            index: 4
          },
          {
            label: '显示对标阿里',
            value: 'aliAG',
            checked: true,
            level: 0,
            index: 5
          },
        ]
      };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      techList: '录入 技术序列',
      manageList: '录入 管理序列',
      cash: '录入 现金',
      share: '录入 股票/期权',
      total: 'total',
      techListAG: '对标 技术序列',
      manageListAG: '对标 管理序列',
    };

    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });

    console.log('增加一行数据')
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
    console.log('修改数据', this.state.dataSource)
  };

  handleTabColShow = (col, show) => {
    if (col === 'aliAG') {
      show ? this.setState((state, props) => {
        const columns = JSON.parse(JSON.stringify(this.columns));
        columns.splice(1, 1);
        return {
          columns: columns
        }
      }) : this.setState((state, props) => {
        const columns = JSON.parse(JSON.stringify(this.columns));
        return {
          columns: this.columns
        }

      })
    }
  }

  handleCheckBox = (el, e) => {
    console.log('多选框事件', el, e)
    const checked = e.target.checked;
    const checkItemIdx = el.index;

    this.setState((state, props) => {
      const tableConfig = JSON.parse(JSON.stringify(state.tableConfig));
      const col = cloneDeep(this.columns);

      tableConfig[checkItemIdx].checked = checked;
      console.log(tableConfig);
      // tableConfig.forEach(conf=>{
      //   if(conf.checked===false){

      //   }
      // })
      for (let conf of tableConfig) {
        if (conf.checked) { continue; }

        if (conf.value === 'aliAG') {
          col.splice(1, 1);

        } else {
          const children = col[0].children
          for (let i = 0; i < children.length; i++) {
            if (children[i].dataIndex === conf.value) {
              children.splice(i, 1);
              break;
            }
          }
        }
      }
      console.log(col);
      return {
        tableConfig: tableConfig,
        columns: col
      }

    })
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });

    const PopoverContent = (
      <div>
        {this.state.tableConfig.map(el => {
          return (
            <p>
              <Checkbox onChange={(e) => this.handleCheckBox(el, e)} checked={el.checked}>{el.label}</Checkbox>
            </p>
          )
        })}
      </div>
    )

    return (
      <div className="companyDetailTable">
        <div className="companyDetailTable-title">
          <span class="basicItemTitle"><Icon className="anticon anticon-container" style={{ fontSize: '15px', marginRight: '9px' }} />岗位级别划分</span>
          <div className="tableShowSetting">
          <Popover content={PopoverContent} trigger="click" placement="bottom">
            <Icon type="setting" class="tableShowSetting-icon" />
          </Popover>
          </div>
          
        </div>

        <Table
          className="companyDetailEditableTable"
          components={components}
          rowClassName={() => "editable-row"}

          dataSource={dataSource}
          columns={columns}
          pagination={false}
          childrenColumnName={'childrenColumnName'}
        />
        <div className="companyDetailTable-addLineBox">
          <span className="companyDetailTable-addLineIcon">
          
          <i className="anticon anticon-plus-circle-o" onClick={this.handleAdd}/>
          {/* <Icon type="plus-circle" onClick={this.handleAdd} theme={'outlined'}/> */}
          </span>
          
        </div>
          
      </div>
    );
  }
}

// ReactDOM.render(<EditableTable />, document.getElementById("container"));

export default EditableTable;