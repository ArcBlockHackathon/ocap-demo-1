# ocap-demo

> Arcblock黑客马拉松参赛作品，TokenTracer by 超链工作组

> 项目基于 [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter.git)

## 启动

```shell
git clone https://github.com/wangshikun2010/ocap-demo.git
cd ocap-demo
yarn
yarn start
```

## 作品介绍

### 目标用户
数字货币投机者或潜在的市场管理者

#### 客户需求
* 崭新的市场，即使野蛮生长，也需要参考现有实现。
* 证券市场对于币市具备参考意义。

#### 证券市场投机方式
* 打新股
* 抓涨停
* 追异动

## 我们需要定位变化

### 设计目标

采用ECharts的TreeMap展示以太坊上最活跃(按照换手率，即当日交易量/该币种当日发行量，避免忽略新币种或小币种)的20种Token。

以24小时为比较单元，相当于全球投机者均经历一个完整的回合。

拖拽滚动条即可直观发现各币种活跃度变化。

### 最终实现

TokenTracer对底层API的数据聚合能力要求较高，目前缺乏聚合统计类API，只能尝试将数据落地后聚合的方式。

Arcblock数据API分页上限是10，比赛时API请求峰值限制也使得我们仅能预先缓存10000条左右的数据，对于TokenTracer所希望达到的目标来看无法满足(每天8000条左右)。

这使得最终Demo实现使用了虚拟数据，希望能提供一种思路，个中缘由仅为局中人言，不足为外人道也。
