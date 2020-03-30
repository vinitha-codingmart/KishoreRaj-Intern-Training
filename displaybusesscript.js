function displayResult() {

    var busesFound = JSON.parse(localStorage.getItem("busesAvailable"));
    document.getElementById('busCount').innerHTML = busesFound.metaData.totalCount + " Buses ";


    for (var i = 0; i < busesFound.metaData.totalCount; i++) {

        var result_sec = document.createElement('div');
        result_sec.classList.add("result-sec");
        
        var bus_items = document.createElement('ul');
        bus_items.classList.add("bus-items");
        result_sec.appendChild(bus_items);
        
        var div = document.createElement('div');
        var li = document.createElement('li');
        li.classList.add('row-sec', 'clearfix');
        div.appendChild(li);
        bus_items.appendChild(div);

        var clearfix__bus_item = document.createElement('div');
        clearfix__bus_item.classList.add('clearfix', 'bus-item');
        li.appendChild(clearfix__bus_item);

        var clearfix__bus_item_details = document.createElement('div');
        clearfix__bus_item_details.classList.add('clearfix', 'bus-item-details');

        clearfix__bus_item.appendChild(clearfix__bus_item_details);

        var clearfix__row_one = document.createElement('div');
        clearfix__row_one.classList.add('clearfix', 'row-one');
        clearfix__bus_item_details.appendChild(clearfix__row_one);

        var column_two__p_right_10__w_30__fl = document.createElement('div');
        column_two__p_right_10__w_30__fl.classList.add('column-two', 'p-right-10', 'w-30', 'fl');
        clearfix__row_one.appendChild(column_two__p_right_10__w_30__fl);

        var travels__lh_24__f_bold__d_color = document.createElement('div');
        travels__lh_24__f_bold__d_color.classList.add('travels', 'lh-24', 'f-bold', 'd-color');
        travels__lh_24__f_bold__d_color.innerHTML = busesFound.inv[i].Tvs;

        var bus_type__f_12__m_top_16__l_color = document.createElement('div');
        bus_type__f_12__m_top_16__l_color.classList.add('bus-type', 'f-12', 'm-top-16', 'l-color');
        bus_type__f_12__m_top_16__l_color.innerHTML = busesFound.inv[i].bt;
        column_two__p_right_10__w_30__fl.appendChild(travels__lh_24__f_bold__d_color);
        column_two__p_right_10__w_30__fl.appendChild(bus_type__f_12__m_top_16__l_color);

        var column_three__p_right_10__w_10__fl = document.createElement('div');
        column_three__p_right_10__w_10__fl.classList.add('column-three', 'p-right-10', 'w-10', 'fl');
        clearfix__row_one.appendChild(column_three__p_right_10__w_10__fl);
        
        var dp_time__f_19__d_color__f_bold = document.createElement('div');
        dp_time__f_19__d_color__f_bold.classList.add('dp-time', 'f-19', 'd-color', 'f-bold');
        
        var time = new Date(busesFound.inv[i].dt);
        var hrs = time.getHours();
        var mins = time.getMinutes();

        if (hrs < 10) {
            hrs = '0' + hrs;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }

        dp_time__f_19__d_color__f_bold.innerHTML = hrs + ":" + mins;
        column_three__p_right_10__w_10__fl.appendChild(dp_time__f_19__d_color__f_bold);

        var dp_loc__l_color__w_wrap__f_12__m_top_42 = document.createElement('div');
        dp_loc__l_color__w_wrap__f_12__m_top_42.classList.add('dp-loc', 'l-color', 'w-wrap', 'f-12', 'm-top-42');
        dp_loc__l_color__w_wrap__f_12__m_top_42.innerHTML = busesFound.inv[i].StdBp;
        column_three__p_right_10__w_10__fl.appendChild(dp_loc__l_color__w_wrap__f_12__m_top_42);

        var column_four__p_right_10__w_10__fl = document.createElement('div');
        column_four__p_right_10__w_10__fl.classList.add('column-four', 'p-right-10', 'w-10', 'fl');
        clearfix__row_one.appendChild(column_four__p_right_10__w_10__fl);

        
        var durationHrs = Math.floor(busesFound.inv[i].dur / 60);
        var durationMins = Math.floor(busesFound.inv[i].dur % 60);

        if (durationHrs < 10) {
            durationHrs = '0' + durationHrs;
        }
        if (durationMins < 10) {
            durationMins = '0' + durationMins;
        }

        var dur__l_color__lh_24 = document.createElement('div');
        dur__l_color__lh_24.classList.add('dur', 'l-color', 'lh-24');
        dur__l_color__lh_24.innerHTML = durationHrs + "h " + durationMins + "m";
        column_four__p_right_10__w_10__fl.appendChild(dur__l_color__lh_24);

        var column_five__p_right_10__w_10__fl = document.createElement('div');
        column_five__p_right_10__w_10__fl.classList.add('column-five', 'p-right-10', 'w-10', 'fl');
        clearfix__row_one.appendChild(column_five__p_right_10__w_10__fl);

        var time = new Date(busesFound.inv[i].at);
        var ahrs = time.getHours();
        var amins = time.getMinutes();

        if (ahrs < 10) {
            ahrs = '0' + ahrs;
        }
        if (amins < 10) {
            amins = '0' + amins;
        }
        
        var bt_time__f_19__d_color__disp_inline = document.createElement('div');
        bt_time__f_19__d_color__disp_inline.classList.add('bp-time', 'f-19', 'd-color', 'disp-Inline');
        bt_time__f_19__d_color__disp_inline.innerHTML = ahrs + ":" + amins;
        column_five__p_right_10__w_10__fl.appendChild(bt_time__f_19__d_color__disp_inline);

        var next_day_dp_lbl__m_top_16 = document.createElement('div');
        next_day_dp_lbl__m_top_16.classList.add('next-day-dp-lbl', 'm-top-16');

        time = new Date(busesFound.inv[i].at);
        var months = new Array(12);
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sept";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";        
        var month = months[time.getMonth()];

        next_day_dp_lbl__m_top_16.innerHTML = time.getDate() + "-" + month;
        column_five__p_right_10__w_10__fl.appendChild(next_day_dp_lbl__m_top_16);

        var bp_loc__l_color__w_wrap__f_12__m_top_8 = document.createElement('div');
        bp_loc__l_color__w_wrap__f_12__m_top_8.classList.add('bp-loc', 'l-color', 'w-wrap', 'f-12', 'm-top-8');
        bp_loc__l_color__w_wrap__f_12__m_top_8.innerHTML = busesFound.inv[i].StdDp;
        column_five__p_right_10__w_10__fl.appendChild(bp_loc__l_color__w_wrap__f_12__m_top_8);

        var column_six__p_right_10__w_10__fl = document.createElement('div');
        column_six__p_right_10__w_10__fl.classList.add('column-six', 'p-right-10', 'w-10', 'fl');
        clearfix__row_one.appendChild(column_six__p_right_10__w_10__fl);

        var rating_sec__lh_24 = document.createElement('div');
        rating_sec__lh_24.classList.add('rating-sec', 'lh-24');
        column_six__p_right_10__w_10__fl.appendChild(rating_sec__lh_24);

        var lh_18__rating__rat_orange = document.createElement('div');
        lh_18__rating__rat_orange.classList.add('lh-18', 'rating', 'rat-orange');
        lh_18__rating__rat_orange.innerHTML = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i>" + busesFound.inv[i].rt.totRt;
        rating_sec__lh_24.appendChild(lh_18__rating__rat_orange);

        var column_seven__p_right_10__w_15__fl = document.createElement('div');
        column_seven__p_right_10__w_15__fl.classList.add('column-seven', 'p-right-10', 'w-15', 'fl');
        clearfix__row_one.appendChild(column_seven__p_right_10__w_15__fl);

        var seat_fare = document.createElement('div');
        seat_fare.classList.add('seat-fare');
        column_seven__p_right_10__w_15__fl.appendChild(seat_fare);

        var oldFare__d_block = document.createElement('div');
        oldFare__d_block.classList.add('oldfare', 'd-block');
        oldFare__d_block.innerHTML = "INR";
        seat_fare.appendChild(oldFare__d_block);

        var fare__d_block = document.createElement('div');
        fare__d_block.classList.add('fare', 'd-block');

        var f_bold__f_19 = document.createElement('span');
        f_bold__f_19.classList.add('f-bold', 'f-19');
        f_bold__f_19.innerHTML = busesFound.inv[i].minfr;
        fare__d_block.appendChild(f_bold__f_19);
        seat_fare.appendChild(fare__d_block);

        var column_eight__w_15__fl = document.createElement('div');
        column_eight__w_15__fl.classList.add('column-eight', 'w-15', 'fl');
        clearfix__row_one.appendChild(column_eight__w_15__fl);

        var seat_left__m_top_30 = document.createElement('div');
        seat_left__m_top_30.classList.add('seat-left', 'm-top-30');
        seat_left__m_top_30.innerHTML = busesFound.inv[i].nsa + " ";
        column_eight__w_15__fl.appendChild(seat_left__m_top_30);

        var l_color1 = document.createElement('span');
        l_color1.classList.add('l-color');
        l_color1.innerHTML = "Seats available";
        seat_left__m_top_30.appendChild(l_color1);

        var window_left__m_top_8 = document.createElement('div');
        window_left__m_top_8.classList.add('window-left', 'm-top-8');
        window_left__m_top_8.innerHTML = busesFound.inv[i].WnSt + " ";
        column_eight__w_15__fl.appendChild(window_left__m_top_8);

        var l_color2 = document.createElement('span');
        l_color2.classList.add('l-color');
        l_color2.innerHTML = "Window";
        window_left__m_top_8.appendChild(l_color2);


        var clearfix__m_top_16 = document.createElement('div');
        clearfix__m_top_16.classList.add('clearfix', 'm-top-16');
        clearfix__bus_item.appendChild(clearfix__m_top_16);

        var button__view_seats__fr = document.createElement('div');
        button__view_seats__fr.classList.add('button', 'view-seats', 'fr');
        button__view_seats__fr.innerHTML = "View Seats";
        clearfix__m_top_16.appendChild(button__view_seats__fr);
        var divChild = document.createElement('div');
        clearfix__m_top_16.appendChild(divChild);

        var fr__bottom_panel__d_color = document.createElement('ul');
        fr__bottom_panel__d_color.classList.add('fr', 'bottom-panel', 'd-color');
        divChild.appendChild(fr__bottom_panel__d_color);

        var li1 = document.createElement('li');
        li1.classList.add('amenties', 'b-p-list');
        fr__bottom_panel__d_color.appendChild(li1);

        var span1 = document.createElement('span');
        span1.classList.add('txt-val');
        span1.innerHTML = "Amenities";
        li1.appendChild(span1);

        var li2 = document.createElement('li');
        li2.classList.add('amenties', 'b-p-list');
        fr__bottom_panel__d_color.appendChild(li2);

        var span2 = document.createElement('span');
        span2.classList.add('txt-val');
        span2.innerHTML = "Bus Photos";
        li2.appendChild(span2);

        var li3 = document.createElement('li');
        li3.classList.add('amenties', 'b-p-list');
        fr__bottom_panel__d_color.appendChild(li3);

        var span3 = document.createElement('span');
        span3.classList.add('txt-val');
        span3.innerHTML = "Boarding " + "&amp" + " Dropping Points";
        li3.appendChild(span3);

        var li4 = document.createElement('li');
        li4.classList.add('amenties', 'b-p-list');
        fr__bottom_panel__d_color.appendChild(li4);

        var span4 = document.createElement('span');
        span4.classList.add('txt-val');
        span4.innerHTML = "Reviews";
        li4.appendChild(span4);

        var li5 = document.createElement('li');
        li5.classList.add('amenties', 'b-p-list');
        fr__bottom_panel__d_color.appendChild(li5);

        var span5 = document.createElement('span');
        span5.classList.add('txt-val');
        span5.innerHTML = "Booking Policies";
        li5.appendChild(span5);

        var clearfix = document.createElement('div');
        clearfix.classList.add('clearfix');
        divChild.appendChild(clearfix);

        var panel_loader__hide = document.createElement('div');
        panel_loader__hide.classList.add('panel-loader', 'hide');
        divChild.appendChild(panel_loader__hide);




        
        var usingjs = document.getElementById('usingjs');
        usingjs.appendChild(result_sec);

    }
    //console.log(JSON.parse(localStorage.getItem("busesAvailable")));

    
}

