<?php
class adminColumnsMetabox {
    function __construct($posttype,$column,$content){
        $this->posttype=$posttype;
        $this->column=$column;
        $this->content=$content;
        add_filter( 'manage_'. $this->posttype .'_posts_columns', array( $this, 'my_modify_imoveis_table' ) );
        add_action( 'manage_'. $this->posttype .'_posts_custom_column', array( $this, 'my_modify_imoveis_table_row'), 10, 2 );
        add_filter( 'manage_edit-'. $this->posttype .'_sortable_columns', array( $this, 'my_sortable_status_column') );
        add_filter( 'query_vars', array( $this, 'wpse331647_custom_query_vars_filter') );
        add_action( 'pre_get_posts', array( $this, 'my_custom_orderby' ) );
    }
    private function insertArrayAtPosition( $array, $insert, $position ) {
        return array_slice($array, 0, $position, TRUE) + $insert + array_slice($array, $position, NULL, TRUE);
    }
    public function my_modify_imoveis_table( $columns ) {
        $columns = $this->insertArrayAtPosition($columns, array(
            $this->column['key'] => __($this->column['value'], 'mvl')
        ), 2);
        return $columns;
    }
    function my_modify_imoveis_table_row( $column_name, $post_id ) {
        $custom_fields = get_post_custom( $post_id );
        switch ($column_name) {
            case $this->column['key'] :
                $status = get_field($this->content['key'], $post_id);
                echo (isset($custom_fields[$this->content['key']][0])) ? "<a href='".admin_url('edit.php?post_type='.$this->posttype.'&'.$this->column['key'].'='.urlencode($status))."'>".$status."</a>" : '';
                break;
            default:
        }
    }
    function my_sortable_status_column( $columns ) {
        $columns[$this->column['key']] = $this->column['value'];
        return $columns;
    }
    function wpse331647_custom_query_vars_filter( $vars ) {
        $vars[] .= $this->content['key'];
        return $vars;
    }
    function my_custom_orderby( $query ) {
        if( !is_admin() || $this->posttype != $query->query['post_type'] ){
            return;
        }
        $orderby = $query->get( 'orderby');
        if( $this->column['key'] == $orderby ) {
            $query->set('meta_key',$this->content['key']);
            $query->set('orderby','meta_value');
        }
        if(isset($query->query_vars[$this->content['key']])) {
            $query->set( 'meta_key', $this->content['key'] );
            $query->set( 'meta_value', $query->query_vars[$this->content['key']] );
        }
    }
}
// // USAGE
// new adminColumnsMetabox(
//     '{post_type}',
//     array(
//         'key'   => '{column_key}',
//         'value' => '{column_title}'
//     ), 
//     array(
//         'key'   => '{metabox_key}'
//     ) 
// );
