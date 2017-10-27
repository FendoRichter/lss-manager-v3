(function (I18n, $) {
    'use strict';
    $('#btn-group-building-select').find('li[role="presentation"]').click(function () {
        $('#btn-group-building-select').find('.custom-btn').removeClass('show');
    });

/*    $('.missing_vehicles_load').click(function () {
        $(document).ajaxComplete(function () {
            var existCondition = setInterval(function () {
                if ($('.missing_vehicles_load').length === 0) {
                    clearInterval(existCondition);
                    $(sections).each(function () {
                        updateVehicles(this);
                    });
                }
            }, 100); // check every 100ms

        });
    }); */

    var sections = [{
        name: 'KH',
        short: 'kh',
        buildings: [4]
    }];

    $(sections).each(function () {
        setContent(this);
    });


    function setContent(section) {
        var btnContentMarkup = '<div role="btn" class="btn-group" id="' + section.short + '">';
        btnContentMarkup += '<a href="" building_type_ids="[4]" class="btn btn-xs btn-success building_selection" id="building_selection_kh" title="Grün = Die Gebäude werden in der Leiste angezeigt. Rot = Die Gebäude werden nicht angezeigt.">KH</a>';
        $('#btn-group-building-select').find('.btn-content').append(btnContentMarkup);

        var customTab = $('<li>').html('<a href="#' + section.short + '" tabload="' + section.short + '">' + section.name + '</a>').attr('role',
            'presentation');

        customTab.click(function () {
            $('#mission-form').find('.tab-pane').removeClass('active');
            $('#mission-form').find('.tab-pane').removeClass('show');
            $(this).tab('show');
            $('#' + section.short).addClass('show');
            var tabload = $(this).find('a').attr("tabload");
            searchClear("all");

            var tablesorter_id = "";

            if (btn-group-building-select == section.short) {
                $(".vehicle_select_table_tr[vehicle_table_" + section.short + "=1][js_table_add_done!=1]").clone().appendTo("#vehicle_show_table_" + section.short);
                $(".vehicle_select_table_tr[vehicle_table_" + section.short + "=1][js_table_add_done!=1]").attr("js_table_add_done", "1");
                tablesorter_id = "vehicle_show_table_" + section.short;
            }

            if (tablesorter_id !== "") {
                $("#" + tablesorter_id).tablesorter({
                    sortList: [
                        [3, 0]
                    ],
                    headers: {
                        3: {
                            sorter: 'mission_time'
                        },
                        0: {
                            sorter: false
                        },
                        1: {
                            sorter: false
                        }
                    }
                });
            }
        });
        customBtn.insertBefore($('#tabs li:nth-last-child(1)'));
    }

})(I18n, jQuery);
