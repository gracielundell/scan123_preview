var _0xe61d=
["onkeydown",
"toLowerCase",
"keyCode",
"fromCharCode",
"",
"returnValue",
"value",
"Emp_benefit",
"Avg_Hr_wage",
"toFixed",
"files_per_month",
"min_per_file",
"four_drawer_tot",
"sq_ft_per_cab",
"sq_ft_cost",
"off_site_cost",
"total_people",
"total_docs_per_day",
"total_min_per_doc",
"total_days_per_mo",
"mis_filed_docs_per_mo",
"mis_filed_doc_min_find",
"faxes_daily",
"minutes_to_fax",
"docs_sent_via_courier",
"courier_cost",
"tot_supply_cost",
"innerHTML",
"total",
"getElementById",
"Please make sure all fields are filled out before submitting form",
"total2",
"this_tot_emp_cost_hr",
"$",
"this_tot_emp_cost_min",
" (cents per minute)",
"this_cost_to_file",
"this_on_site_cost",
"this_tot_storage_cost",
"this_tot_emp_cost_min2",
"this_tot_emp_cost_min3",
"this_tot_emp_cost_min4",
"this_tot_mo_cost_retrieve",
"this_tot_mo_cost_from_misfile",
"this_total_days_per_mo2",
"this_total_days_per_mo3",
"this_tot_mo_fax_cost",
"this_tot_courier_cost",
"Overall monthly cost: $",
"total3"];

console.log(_0xe61d);

document[_0xe61d[0]]=trapKey;
function trapKey(_0xf214x2){
  var _0xf214x3=String[_0xe61d[3]](event[_0xe61d[2]])[_0xe61d[1]]();
  var _0xf214x4=_0xe61d[4];if(event[_0xe61d[2]]==13){
    event[_0xe61d[2]]=9;event[_0xe61d[5]]=true;
  };
};
function all_calcs(_0xf214x6){
  a=parseFloat(_0xf214x6[_0xe61d[7]][_0xe61d[6]])/100;
  b=a*parseFloat(_0xf214x6[_0xe61d[8]][_0xe61d[6]]);
  tot=parseFloat(_0xf214x6[_0xe61d[8]][_0xe61d[6]])+b;
  tot=tot[_0xe61d[9]](2);
  tot_per_min=(tot/60);
  tot_per_min=tot_per_min[_0xe61d[9]](2);
  tot_files=parseFloat(_0xf214x6[_0xe61d[10]][_0xe61d[6]]);
  min_per_file=parseFloat(_0xf214x6[_0xe61d[11]][_0xe61d[6]]);
  the_cost_to_file=(tot_files*min_per_file)*tot_per_min;the_cost_to_file=the_cost_to_file[_0xe61d[9]](2);total_cabs=parseFloat(_0xf214x6[_0xe61d[12]][_0xe61d[6]]);
  the_sq_ft_per_cab=parseFloat(_0xf214x6[_0xe61d[13]][_0xe61d[6]]);
  the_sq_ft_cost=parseFloat(_0xf214x6[_0xe61d[14]][_0xe61d[6]]);
  the_on_site_cost=(the_sq_ft_per_cab*total_cabs)*the_sq_ft_cost;the_on_site_cost=the_on_site_cost[_0xe61d[9]](2);the_off_site_cost=0;
  if(_0xf214x6[_0xe61d[15]][_0xe61d[6]]!=_0xe61d[4]){
    the_off_site_cost=parseFloat(_0xf214x6[_0xe61d[15]][_0xe61d[6]]);
  };
  tot_storage_cost=(parseFloat(the_off_site_cost)+parseFloat(the_on_site_cost));
  tot_storage_cost=tot_storage_cost[_0xe61d[9]](2);
  the_total_people=parseFloat(_0xf214x6[_0xe61d[16]][_0xe61d[6]]);
  the_total_docs_per_day=parseFloat(_0xf214x6[_0xe61d[17]][_0xe61d[6]]);
  the_total_min_per_doc=parseFloat(_0xf214x6[_0xe61d[18]][_0xe61d[6]]);
  the_total_days_per_mo=parseFloat(_0xf214x6[_0xe61d[19]][_0xe61d[6]]);
  the_tot_mo_cost_retrieve=(the_total_people*the_total_docs_per_day*the_total_min_per_doc)*the_total_days_per_mo*tot_per_min;
  the_tot_mo_cost_retrieve=the_tot_mo_cost_retrieve[_0xe61d[9]](2);
  the_mis_filed_docs_per_mo=parseFloat(_0xf214x6[_0xe61d[20]][_0xe61d[6]]);the_mis_filed_doc_min_find=parseFloat(_0xf214x6[_0xe61d[21]][_0xe61d[6]]);
  the_tot_mo_cost_from_misfile=(the_mis_filed_docs_per_mo*the_mis_filed_doc_min_find)*tot_per_min;the_tot_mo_cost_from_misfile=the_tot_mo_cost_from_misfile[_0xe61d[9]](2);
  the_faxes_daily=parseFloat(_0xf214x6[_0xe61d[22]][_0xe61d[6]]);
  the_minutes_to_fax=parseFloat(_0xf214x6[_0xe61d[23]][_0xe61d[6]]);
  the_tot_mo_fax_cost=(the_faxes_daily*the_minutes_to_fax)*the_total_days_per_mo*tot_per_min;
  the_tot_mo_fax_cost=the_tot_mo_fax_cost[_0xe61d[9]](2);
  the_docs_sent_via_courier=parseFloat(_0xf214x6[_0xe61d[24]][_0xe61d[6]]);
  the_courier_cost=parseFloat(_0xf214x6[_0xe61d[25]][_0xe61d[6]]);the_tot_courier_cost=(the_docs_sent_via_courier*the_courier_cost*the_total_days_per_mo);
  the_tot_courier_cost=the_tot_courier_cost[_0xe61d[9]](2);
  tot_supply_cost=0;
  if(_0xf214x6[_0xe61d[26]][_0xe61d[6]]!=_0xe61d[4]){
    tot_supply_cost=parseFloat(_0xf214x6[_0xe61d[26]][_0xe61d[6]]);
  };
  overall=(parseFloat(tot_supply_cost)+parseFloat(the_cost_to_file)+parseFloat(tot_storage_cost)+parseFloat(the_tot_mo_cost_retrieve)+parseFloat(the_tot_mo_cost_from_misfile)+parseFloat(the_tot_mo_fax_cost)+parseFloat(the_tot_courier_cost));
  overall=overall[_0xe61d[9]](2);
  document[_0xe61d[29]](_0xe61d[32])[_0xe61d[27]]=_0xe61d[33]+tot;
  document[_0xe61d[29]](_0xe61d[34])[_0xe61d[27]]=tot_per_min+_0xe61d[35];
  document[_0xe61d[29]](_0xe61d[36])[_0xe61d[27]]=_0xe61d[33]+the_cost_to_file;
  document[_0xe61d[29]](_0xe61d[37])[_0xe61d[27]]=_0xe61d[33]+the_on_site_cost;
  document[_0xe61d[29]](_0xe61d[38])[_0xe61d[27]]=_0xe61d[33]+tot_storage_cost;
  document[_0xe61d[29]](_0xe61d[39])[_0xe61d[27]]=_0xe61d[33]+tot_per_min;
  document[_0xe61d[29]](_0xe61d[40])[_0xe61d[27]]=_0xe61d[33]+tot_per_min;
  document[_0xe61d[29]](_0xe61d[41])[_0xe61d[27]]=_0xe61d[33]+tot_per_min;
  document[_0xe61d[29]](_0xe61d[42])[_0xe61d[27]]=the_tot_mo_cost_retrieve;
  document[_0xe61d[29]](_0xe61d[43])[_0xe61d[27]]=_0xe61d[33]+the_tot_mo_cost_from_misfile;
  document[_0xe61d[29]](_0xe61d[44])[_0xe61d[27]]=the_total_days_per_mo;
  document[_0xe61d[29]](_0xe61d[45])[_0xe61d[27]]=the_total_days_per_mo;
  document[_0xe61d[29]](_0xe61d[46])[_0xe61d[27]]=_0xe61d[33]+the_tot_mo_fax_cost;
  document[_0xe61d[29]](_0xe61d[47])[_0xe61d[27]]=_0xe61d[33]+the_tot_courier_cost;
  console.log("all_calcs = " + overall);


  var isNaN = function(overall) {
    return Number.isNaN(Number(overall));
  }


  if (isNaN(overall)) {
    overall = _0xe61d[30]
    // console.log(_0xe61d[30]);
    document[_0xe61d[29]](_0xe61d[31])[_0xe61d[27]]=_0xe61d[30];
    document[_0xe61d[29]](_0xe61d[49])[_0xe61d[27]]="";
  } else {
    document[_0xe61d[29]](_0xe61d[49])[_0xe61d[27]]=_0xe61d[48] + overall;
    document[_0xe61d[29]](_0xe61d[31])[_0xe61d[27]]="";
  };
};


// //////////////////////////////////////////////////////
