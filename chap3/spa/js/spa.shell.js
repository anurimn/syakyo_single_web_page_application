/*
 * spa.shell.js
 * SPAのシェルモジュール
*/

/*jslint browser: true, continue: true,
  devel: true, indent: 4, maxerr: 50,
  newcap: true, nomen: true, plusplus: true,
  regexp: true, sloppy:true, vars: false,
  white: true
*/
/*global $, spa */
spa.shell = (function(){
    //----モジュールスコープ変数開始----
    // 名前空間(spa.shell)全体で利用できるすべての変数を宣言
    // configMapに静的な構成値を配置
    var
        configMap = {
            main_html: String()
                + '<div class="spa-shell-head">'
                    + '<div class="spa-shell-head-logo"></div>'
                    + '<div class="spa-shell-head-acct"></div>'
                    + '<div class="spa-shell-head-search"></div>'
                + '</div>'
                + '<div class="spa-shell-main">'
                    + '<div class="spa-shell-main-nav"></div>'
                    + '<div class="spa-shell-main-content"></div>'
                + '</div>'
                + '<div class="spa-shell-foot"></div>'
                + '<div class="spa-shell-chat"></div>'
                + '<div class="spa-shell-modal"></div>'
        },
        // モジュール全体で共有する動的情報をstateMapに配置
        stateMap = { $container: null },
        // jqueryMapに、jQueryコレクションをキャッシュ
        jqueryMap = {},
        
        // このセクションですべてのモジュールスコープ変数を宣言する
        // その多くはのちに割り当てる
        setJqueryMap, initModule;
        
        //----モジュールスコープ変数終了----
        
        //---- ユーティリティメソッド開始 ----
        // ページとやり取りしない関数のための「ユーティリティメソッド」セクションを用意
        //---- ユーティリティメソッド終了 ----
        
        //---- DOMメソッド開始 ----
        //-------- DOMメソッド/setJqueryMap/開始
        // setJqueryMapを使って、jQueryコレクションをキャッシュ
        // この関数は、記載するほとんどすべてのシェルと機能モジュールに存在する
        // jqueryMapキャッシュを使うと、jQueryのドキュメントトラバーサル数を大幅に減らし、
        // 性能を改善できる
        setJqueryMap = function(){
            var $container = stateMap.$container;
            jquerymap = { $container: $container };
        };
        //-------- DOMメソッド/setJqueryMap/終了
        
        //---- イベントハンドラ開始 ----
        // jQueryイベントハンドラ関数のための「イベントハンドラ」セクションを用意する
        //---- イベントハンドラ終了 ----
        
        //---- パブリックメソッド開始 ----
        // パブリックに利用可能なメソッドを「パブリックメソッド」セクションに配置する
        // パブリックメソッド/initModule/開始
        // モジュールの初期化に使う
        initModule = function($container){
            stateMap.$container = $container;
            $container.html(configMap.main_html);
            setJqueryMap();
        };
        // パブリックメソッド/initModule/終了
        // mapにパブリックメンバを戻すことで、明示的にパブリックメソッドをエクスポートする
        // 現在はinitModuleだけを利用できる
        return { initModule: initModule };
        //---- パブリックメソッド終了 ----
}());  