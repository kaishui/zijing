import * as React from 'react';
import {Button, DatePicker} from "antd"


type CounterProps = {
    isOn: boolean,
    text: string,
    onclick: any,
    submitText: any
}

export class Counter extends React.Component<CounterProps>{

    componentDidMount(): void {
// 基于准备好的dom，初始化echarts实例
// 绘制图表
        let options = ({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        // let mychart : ECharts = echarts.init(document.getElementById('chart') as HTMLDivElement);
        //
        // mychart.setOption(options);
    }

    render() {
        let {onclick, submitText} = this.props
        return (
            <div>
                <Button type={"primary"} onClick={submitText}> button: {this.props.text}</Button>
                <div>{this.props.isOn}</div>
                <Button type="primary">PRESS ME</Button>
                <DatePicker />
                {/*<div id="chart" style={{width: '100%', height: '300px' }}></div>*/}

            </div>
        );
    }
}