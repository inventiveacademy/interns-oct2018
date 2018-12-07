const show_days = 29;
function x_axis_dates(days) {
  var d = moment();
  var xaxis = [];
  var change_days = days;
  d.subtract(change_days, 'days');
  for(let x = 0; x <= days; x++) {
    xaxis.push((d.month() + 1) + "/" + d.date());
	d.add(1, 'days');	 
  }
  return(xaxis);
}
function moment_dates(days) {
  var md = moment();
  var mdates = [];
  var change_days = days;
  md.subtract(change_days, 'days');
  for(let x = 0; x <= days; x++) {
  	mdates.push(md.format());
  	md.add(1, 'days');
  }
  return(mdates);
}
function line_operations(a_line) { 
  for(let x = 0; x < a_line.length; x++) {
    a_line[x].cDate = moment(a_line[x].cDate);
  }
  var chart_days = moment_dates(show_days);
  for(let x = 0; x < chart_days.length; x++) {
    chart_days[x] = moment(chart_days[x]);
  }
  var zero_array = new Array(show_days + 1).fill(0);
  for(let x = 0; x < chart_days.length; x++) {
    for(let abc = 0; abc < a_line.length; abc++) {
      if (chart_days[x].date() == a_line[abc].cDate.date()) {
        if (chart_days[x].month() == a_line[abc].cDate.month()) {
          if (chart_days[x].year() == a_line[abc].cDate.year()) {
            zero_array[x]++;
          }
        }
      }
    }
  }
  for(let x = 0; x < zero_array.length - 1; x++) {
    zero_array[x+1] = zero_array[x+1] + zero_array[x];
  }
  return(zero_array);
}
async function two_lines() {
  try {
    var cr_call = await axios.get('https://91duv1eln6.eexecute-api.us-east-1.amazonaws.com/dev/chartdb');
  }
  catch(err) {}
    var myChart = new Chart(ctx, {
      options: {
        title: {
          display: true,
          text: "The data could not be fetched; Try again later",
          fontColor: 'red',
          fontSize: 30
        }
      }
    }); 
  var created = cr_call.data.created;  
  var resolved = cr_call.data.resolved;
  var zero_array1 = line_operations(created);
  var zero_array2 = line_operations(resolved);
  var ret_array = [zero_array1, zero_array2];
  return(ret_array);
};
const promise = two_lines();