initSidebarItems({"attr":[["connector_test",""],["test_suite",""]],"constant":[["FULL_ID_OPTIONS",""],["SIMPLE_ID_OPTIONS",""]],"enum":[["Color","The 8 standard colors."],["ConnectorCapability",""],["ConnectorTag",""],["DatamodelFragment","A datamodel fragment is the parsed version of a `#<ident>(...)` template string."],["FragmentArgument","Wrapper for general argument parsing."],["Identifier",""],["MySqlVersion",""],["PrismaValue",""],["QueryParamsWhere",""],["QueryParamsWhereMany",""],["RelationField",""],["RelationReference",""],["Runner",""],["Styles",""],["TemplatingErrorKind",""],["TestError",""]],"fn":[["child_references",""],["common_child_references",""],["common_parent_references",""],["decode_bytes",""],["encode_bytes",""],["full_child_references",""],["full_parent_references",""],["parent_references",""],["parse","Main entry point into the template parsing. Parses a schema fragment of the form `#<fragment_ident>...<eol>`."],["parse_compound_id","Parses the JSON result of mutation sent to the Query Engine in order to extract the generated compound ids. Returns a string that’s already formatted to be included in another query. eg: { “id_1_id_2”: { id_1: “my_fancy_id_1”, id_2: “my_fancy_id_2” } }"],["parse_id","Parses the JSON result of mutation sent to the Query Engine in order to extract the generated id. Returns a string that’s already formatted to be included in another query. eg: { “id”: “my_fancy_id” }"],["parse_many_compound_ids","Performs the same extraction as `parse_compound_id` but for an array"],["parse_many_ids","Performs the same extraction as `parse_id` but for an array"],["render_test_datamodel","Render the complete datamodel with all bells and whistles."],["run_relation_link_test",""],["run_with_tokio","Helper method to allow a sync shell function to run the async test blocks."],["schema_with_relation",""],["setup_project","Setup of everything as defined in the passed datamodel."],["simple_child_references",""],["simple_parent_references",""],["stringify_date","Stringify a date to the following format 1999-05-01T00:00:00.000Z"],["teardown_project","Teardown of a test setup."],["test_tracing_subscriber",""],["walk_json",""]],"macro":[["assert_error",""],["assert_query",""],["indoc","Unindent and produce `&'static str`."],["is_one_of",""],["jNull","Macro that replaces JSON nullability strings with the appropriate representation based on the connector capabilities. Allows us to reuse tests instead of copying."],["match_connector_result",""],["run_query",""],["run_query_json",""]],"mod":[["arithmetic","Note: Only number operations are implemented at the moment."],["control","A couple of functions to enable and disable coloring."],["query_core",""],["schemas",""],["utils",""]],"struct":[["BinaryRunner",""],["CONFIG","Test configuration, loaded once at runtime."],["ColoredString","A string that may have color and/or style applied to it."],["ConversionFailure",""],["DatamodelWithParams",""],["DirectRunner","Direct engine runner."],["Directive","A field directive, e.g. `@map(\"_id\")`."],["IdFragment","ID field definition, e.g. `#id(id, Int, @id @test.SmallInt)`"],["M2mFragment","M2m field definition, e.g. `#m2m(posts, Post[], String, \"name\")`"],["MongoDbSchemaRenderer",""],["MySqlConnectorTag",""],["NodeApiRunner",""],["PrintWriter","This is a temporary implementation detail for `tracing` logs in tests. Instead of going through `std::io::stderr`, it goes through the specific local stderr handle used by `eprintln` and `dbg`, allowing logs to appear in specific test outputs for readability."],["QueryParams","QueryParams enables parsing the generated id(s) of mutations sent to the Query Engine so that it can be reused in subsequent queries"],["QueryResult",""],["SqlDatamodelRenderer",""],["Style","A combinatorial style such as bold, italics, dimmed, etc."],["TemplatingError",""],["TestConfig","The central test configuration."]],"trait":[["AsyncFn","Taken from Reddit. Enables taking an async function pointer which takes references as param https://www.reddit.com/r/rust/comments/jvqorj/hrtb_with_async_functions/"],["Colorize","The trait that enables something to be given color."],["ConnectorTagInterface",""],["DatamodelRenderer","The main trait a datamodel renderer for a connector has to implement."],["RunnerInterface",""],["TryFrom","Simple and safe type conversions that may fail in a controlled way under some circumstances. It is the reciprocal of [`TryInto`]."],["VecUtilities",""],["WithSubscriber","Extension trait allowing futures, streams, and sinks to be instrumented with a `tracing` `Subscriber`."]],"type":[["DatamodelsAndCapabilities",""],["PrismaListValue",""],["PrismaValueResult",""],["TemplatingResult",""],["TestResult",""]]});