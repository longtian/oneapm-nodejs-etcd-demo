/**
 * Created by yan on 15-11-4.
 */


function parse(n, parentKey) {
  var ret = {};
  ret.name = n.key;

  if (parentKey) {
    ret.name = ret.name.replace(parentKey, '');
  }

  ret.value = n.value;

  if (n.dir) {
    if (n.nodes) {
      ret.children = n.nodes.map(function (x) {
        return parse(x, n.key)
      });
    }
  } else {
    ret.children = [{
      name: n.value,
      symbol: 'rectagle'
    }]
  }

  return ret;
}

$.getJSON('/nodes', function (data) {

  console.log(arguments);
  var myChart = echarts.init(document.getElementById('main'));

  var option = {
    title: {
      text: data.name
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: '树图',
        type: 'tree',
        orient: 'horizontal',  // vertical horizontal
        rootLocation: {x: 100, y: 230}, // 根节点位置  {x: 100, y: 'center'}
        hoverable: false,
        roam: true,
        symbolSize: 6,
        itemStyle: {
          normal: {
            color: '#4883b4',
            label: {
              show: true,
              position: 'right',
              formatter: "{b}",
              textStyle: {
                color: '#000',
                fontSize: 5
              }
            },
            lineStyle: {
              color: '#ccc',
              type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
            }
          },
          emphasis: {
            color: '#4883b4',
            label: {
              show: false
            },
            borderWidth: 0
          }
        },

        data: [parse(data)]
      }
    ]
  };
  // 为echarts对象加载数据
  myChart.setOption(option);
})

$.getJSON('/timeservers', function (servers) {
  $.each(servers, function (i, k) {
    $("<iframe>").attr('src', 'http://' + k + '/time').before().appendTo('#timeservers');
  })
})


$.get("/redis", function (txt) {
  $("#redis").html(txt.replace(/run_id:(.*)$/m, 'run_id:<span class="red">$1</span>'));
});
