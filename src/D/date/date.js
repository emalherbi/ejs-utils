/* returns Date format Br or Sql and time now
* */
var Data =
{
  nowBr : function() { /* using jquery ui */
    return $.datepicker.formatDate( 'dd/mm/yy', new Date() );
  },
  nowSql : function() { /* using jquery ui */
    return $.datepicker.formatDate( 'yy-mm-dd', new Date() );
  },
  today : function() { /* using javascript */
    var that = new Date();
    return ((that.getDate() < 10)?"0":"") + that.getDate() +"/"+(((that.getMonth()+1) < 10)?"0":"") + (that.getMonth()+1) +"/"+ that.getFullYear()
  },
  timeNow : function() { /* using javascript */
    var that = new Date();
    return ((that.getHours() < 10)?"0":"") + that.getHours() +":"+ ((that.getMinutes() < 10)?"0":"") + that.getMinutes() +":"+ ((that.getSeconds() < 10)?"0":"") + that.getSeconds();
  }
};
