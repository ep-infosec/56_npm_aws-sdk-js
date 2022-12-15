import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class QuickSight extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QuickSight.Types.ClientConfiguration)
  config: Config & QuickSight.Types.ClientConfiguration;
  /**
   * Cancels an ongoing ingestion of data into SPICE.
   */
  cancelIngestion(params: QuickSight.Types.CancelIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.CancelIngestionResponse) => void): Request<QuickSight.Types.CancelIngestionResponse, AWSError>;
  /**
   * Cancels an ongoing ingestion of data into SPICE.
   */
  cancelIngestion(callback?: (err: AWSError, data: QuickSight.Types.CancelIngestionResponse) => void): Request<QuickSight.Types.CancelIngestionResponse, AWSError>;
  /**
   * Creates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize Amazon QuickSight by removing Amazon QuickSight sample assets and videos for all new users, see Customizing Amazon QuickSight in the Amazon QuickSight User Guide.  You can create customizations for your Amazon Web Services account or, if you specify a namespace, for a QuickSight namespace instead. Customizations that apply to a namespace always override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the  DescribeThemePermissions  API operation. To share the theme, grant permissions by using the  UpdateThemePermissions  API operation. 
   */
  createAccountCustomization(params: QuickSight.Types.CreateAccountCustomizationRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateAccountCustomizationResponse) => void): Request<QuickSight.Types.CreateAccountCustomizationResponse, AWSError>;
  /**
   * Creates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize Amazon QuickSight by removing Amazon QuickSight sample assets and videos for all new users, see Customizing Amazon QuickSight in the Amazon QuickSight User Guide.  You can create customizations for your Amazon Web Services account or, if you specify a namespace, for a QuickSight namespace instead. Customizations that apply to a namespace always override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the  DescribeThemePermissions  API operation. To share the theme, grant permissions by using the  UpdateThemePermissions  API operation. 
   */
  createAccountCustomization(callback?: (err: AWSError, data: QuickSight.Types.CreateAccountCustomizationResponse) => void): Request<QuickSight.Types.CreateAccountCustomizationResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight account, or subscribes to Amazon QuickSight Q. The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK. This operation isn't supported in the US East (Ohio) Region, South America (Sao Paulo) Region, or Asia Pacific (Singapore) Region.  Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see Sign up for Amazon Web Services in the Amazon QuickSight User Guide. The person who signs up for Amazon QuickSight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see IAM Policy Examples for Amazon QuickSight in the Amazon QuickSight User Guide. If your IAM policy includes both the Subscribe and CreateAccountSubscription actions, make sure that both actions are set to Allow. If either action is set to Deny, the Deny action prevails and your API call fails. You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon QuickSight, see Passing IAM roles to Amazon QuickSight in the Amazon QuickSight User Guide. You can't set default resource access on the new account from the Amazon QuickSight API. Instead, add default resource access from the Amazon QuickSight console. For more information about setting default resource access to Amazon Web Services services, see Setting default resource access to Amazon Web Services services in the Amazon QuickSight User Guide.
   */
  createAccountSubscription(params: QuickSight.Types.CreateAccountSubscriptionRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateAccountSubscriptionResponse) => void): Request<QuickSight.Types.CreateAccountSubscriptionResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight account, or subscribes to Amazon QuickSight Q. The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK. This operation isn't supported in the US East (Ohio) Region, South America (Sao Paulo) Region, or Asia Pacific (Singapore) Region.  Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see Sign up for Amazon Web Services in the Amazon QuickSight User Guide. The person who signs up for Amazon QuickSight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see IAM Policy Examples for Amazon QuickSight in the Amazon QuickSight User Guide. If your IAM policy includes both the Subscribe and CreateAccountSubscription actions, make sure that both actions are set to Allow. If either action is set to Deny, the Deny action prevails and your API call fails. You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon QuickSight, see Passing IAM roles to Amazon QuickSight in the Amazon QuickSight User Guide. You can't set default resource access on the new account from the Amazon QuickSight API. Instead, add default resource access from the Amazon QuickSight console. For more information about setting default resource access to Amazon Web Services services, see Setting default resource access to Amazon Web Services services in the Amazon QuickSight User Guide.
   */
  createAccountSubscription(callback?: (err: AWSError, data: QuickSight.Types.CreateAccountSubscriptionResponse) => void): Request<QuickSight.Types.CreateAccountSubscriptionResponse, AWSError>;
  /**
   * Creates an analysis in Amazon QuickSight.
   */
  createAnalysis(params: QuickSight.Types.CreateAnalysisRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateAnalysisResponse) => void): Request<QuickSight.Types.CreateAnalysisResponse, AWSError>;
  /**
   * Creates an analysis in Amazon QuickSight.
   */
  createAnalysis(callback?: (err: AWSError, data: QuickSight.Types.CreateAnalysisResponse) => void): Request<QuickSight.Types.CreateAnalysisResponse, AWSError>;
  /**
   * Creates a dashboard from a template. To first create a template, see the  CreateTemplate  API operation. A dashboard is an entity in Amazon QuickSight that identifies Amazon QuickSight reports, created from analyses. You can share Amazon QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account.
   */
  createDashboard(params: QuickSight.Types.CreateDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDashboardResponse) => void): Request<QuickSight.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dashboard from a template. To first create a template, see the  CreateTemplate  API operation. A dashboard is an entity in Amazon QuickSight that identifies Amazon QuickSight reports, created from analyses. You can share Amazon QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account.
   */
  createDashboard(callback?: (err: AWSError, data: QuickSight.Types.CreateDashboardResponse) => void): Request<QuickSight.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.
   */
  createDataSet(params: QuickSight.Types.CreateDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDataSetResponse) => void): Request<QuickSight.Types.CreateDataSetResponse, AWSError>;
  /**
   * Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.
   */
  createDataSet(callback?: (err: AWSError, data: QuickSight.Types.CreateDataSetResponse) => void): Request<QuickSight.Types.CreateDataSetResponse, AWSError>;
  /**
   * Creates a data source.
   */
  createDataSource(params: QuickSight.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDataSourceResponse) => void): Request<QuickSight.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source.
   */
  createDataSource(callback?: (err: AWSError, data: QuickSight.Types.CreateDataSourceResponse) => void): Request<QuickSight.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an empty shared folder.
   */
  createFolder(params: QuickSight.Types.CreateFolderRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateFolderResponse) => void): Request<QuickSight.Types.CreateFolderResponse, AWSError>;
  /**
   * Creates an empty shared folder.
   */
  createFolder(callback?: (err: AWSError, data: QuickSight.Types.CreateFolderResponse) => void): Request<QuickSight.Types.CreateFolderResponse, AWSError>;
  /**
   * Adds an asset, such as a dashboard, analysis, or dataset into a folder.
   */
  createFolderMembership(params: QuickSight.Types.CreateFolderMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateFolderMembershipResponse) => void): Request<QuickSight.Types.CreateFolderMembershipResponse, AWSError>;
  /**
   * Adds an asset, such as a dashboard, analysis, or dataset into a folder.
   */
  createFolderMembership(callback?: (err: AWSError, data: QuickSight.Types.CreateFolderMembershipResponse) => void): Request<QuickSight.Types.CreateFolderMembershipResponse, AWSError>;
  /**
   * Use the CreateGroup operation to create a group in Amazon QuickSight. You can create up to 10,000 groups in a namespace. If you want to create more than 10,000 groups in a namespace, contact AWS Support. The permissions resource is arn:aws:quicksight:&lt;your-region&gt;:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.
   */
  createGroup(params: QuickSight.Types.CreateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Use the CreateGroup operation to create a group in Amazon QuickSight. You can create up to 10,000 groups in a namespace. If you want to create more than 10,000 groups in a namespace, contact AWS Support. The permissions resource is arn:aws:quicksight:&lt;your-region&gt;:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.
   */
  createGroup(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group. 
   */
  createGroupMembership(params: QuickSight.Types.CreateGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group. 
   */
  createGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique.
   */
  createIAMPolicyAssignment(params: QuickSight.Types.CreateIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.CreateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique.
   */
  createIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.CreateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.CreateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in an Enterprise edition account 32 times in a 24-hour period. You can manually refresh datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period is measured starting 24 hours before the current date and time. Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.
   */
  createIngestion(params: QuickSight.Types.CreateIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateIngestionResponse) => void): Request<QuickSight.Types.CreateIngestionResponse, AWSError>;
  /**
   * Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in an Enterprise edition account 32 times in a 24-hour period. You can manually refresh datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period is measured starting 24 hours before the current date and time. Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.
   */
  createIngestion(callback?: (err: AWSError, data: QuickSight.Types.CreateIngestionResponse) => void): Request<QuickSight.Types.CreateIngestionResponse, AWSError>;
  /**
   * (Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight. A namespace allows you to isolate the Amazon QuickSight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your Amazon Web Services account is subscribed to Amazon QuickSight. The namespace must be unique within the Amazon Web Services account. By default, there is a limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with Amazon Web Services Support. 
   */
  createNamespace(params: QuickSight.Types.CreateNamespaceRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateNamespaceResponse) => void): Request<QuickSight.Types.CreateNamespaceResponse, AWSError>;
  /**
   * (Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight. A namespace allows you to isolate the Amazon QuickSight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your Amazon Web Services account is subscribed to Amazon QuickSight. The namespace must be unique within the Amazon Web Services account. By default, there is a limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with Amazon Web Services Support. 
   */
  createNamespace(callback?: (err: AWSError, data: QuickSight.Types.CreateNamespaceResponse) => void): Request<QuickSight.Types.CreateNamespaceResponse, AWSError>;
  /**
   * Creates a template from an existing Amazon QuickSight analysis or template. You can use the resulting template to create a dashboard. A template is an entity in Amazon QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
   */
  createTemplate(params: QuickSight.Types.CreateTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateResponse) => void): Request<QuickSight.Types.CreateTemplateResponse, AWSError>;
  /**
   * Creates a template from an existing Amazon QuickSight analysis or template. You can use the resulting template to create a dashboard. A template is an entity in Amazon QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
   */
  createTemplate(callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateResponse) => void): Request<QuickSight.Types.CreateTemplateResponse, AWSError>;
  /**
   * Creates a template alias for a template.
   */
  createTemplateAlias(params: QuickSight.Types.CreateTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateAliasResponse) => void): Request<QuickSight.Types.CreateTemplateAliasResponse, AWSError>;
  /**
   * Creates a template alias for a template.
   */
  createTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateAliasResponse) => void): Request<QuickSight.Types.CreateTemplateAliasResponse, AWSError>;
  /**
   * Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon QuickSight in the Amazon QuickSight User Guide.
   */
  createTheme(params: QuickSight.Types.CreateThemeRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateThemeResponse) => void): Request<QuickSight.Types.CreateThemeResponse, AWSError>;
  /**
   * Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon QuickSight in the Amazon QuickSight User Guide.
   */
  createTheme(callback?: (err: AWSError, data: QuickSight.Types.CreateThemeResponse) => void): Request<QuickSight.Types.CreateThemeResponse, AWSError>;
  /**
   * Creates a theme alias for a theme.
   */
  createThemeAlias(params: QuickSight.Types.CreateThemeAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateThemeAliasResponse) => void): Request<QuickSight.Types.CreateThemeAliasResponse, AWSError>;
  /**
   * Creates a theme alias for a theme.
   */
  createThemeAlias(callback?: (err: AWSError, data: QuickSight.Types.CreateThemeAliasResponse) => void): Request<QuickSight.Types.CreateThemeAliasResponse, AWSError>;
  /**
   * Deletes all Amazon QuickSight customizations in this Amazon Web Services Region for the specified Amazon Web Services account and Amazon QuickSight namespace.
   */
  deleteAccountCustomization(params: QuickSight.Types.DeleteAccountCustomizationRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteAccountCustomizationResponse) => void): Request<QuickSight.Types.DeleteAccountCustomizationResponse, AWSError>;
  /**
   * Deletes all Amazon QuickSight customizations in this Amazon Web Services Region for the specified Amazon Web Services account and Amazon QuickSight namespace.
   */
  deleteAccountCustomization(callback?: (err: AWSError, data: QuickSight.Types.DeleteAccountCustomizationResponse) => void): Request<QuickSight.Types.DeleteAccountCustomizationResponse, AWSError>;
  /**
   * Use the DeleteAccountSubscription operation to delete an Amazon QuickSight account. This operation will result in an error message if you have configured your account termination protection settings to True. To change this setting and delete your account, call the UpdateAccountSettings API and set the value of the TerminationProtectionEnabled parameter to False, then make another call to the DeleteAccountSubscription API.
   */
  deleteAccountSubscription(params: QuickSight.Types.DeleteAccountSubscriptionRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteAccountSubscriptionResponse) => void): Request<QuickSight.Types.DeleteAccountSubscriptionResponse, AWSError>;
  /**
   * Use the DeleteAccountSubscription operation to delete an Amazon QuickSight account. This operation will result in an error message if you have configured your account termination protection settings to True. To change this setting and delete your account, call the UpdateAccountSettings API and set the value of the TerminationProtectionEnabled parameter to False, then make another call to the DeleteAccountSubscription API.
   */
  deleteAccountSubscription(callback?: (err: AWSError, data: QuickSight.Types.DeleteAccountSubscriptionResponse) => void): Request<QuickSight.Types.DeleteAccountSubscriptionResponse, AWSError>;
  /**
   * Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon QuickSight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon QuickSight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon QuickSight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it.
   */
  deleteAnalysis(params: QuickSight.Types.DeleteAnalysisRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteAnalysisResponse) => void): Request<QuickSight.Types.DeleteAnalysisResponse, AWSError>;
  /**
   * Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon QuickSight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon QuickSight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon QuickSight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it.
   */
  deleteAnalysis(callback?: (err: AWSError, data: QuickSight.Types.DeleteAnalysisResponse) => void): Request<QuickSight.Types.DeleteAnalysisResponse, AWSError>;
  /**
   * Deletes a dashboard.
   */
  deleteDashboard(params: QuickSight.Types.DeleteDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDashboardResponse) => void): Request<QuickSight.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dashboard.
   */
  deleteDashboard(callback?: (err: AWSError, data: QuickSight.Types.DeleteDashboardResponse) => void): Request<QuickSight.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dataset.
   */
  deleteDataSet(params: QuickSight.Types.DeleteDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSetResponse) => void): Request<QuickSight.Types.DeleteDataSetResponse, AWSError>;
  /**
   * Deletes a dataset.
   */
  deleteDataSet(callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSetResponse) => void): Request<QuickSight.Types.DeleteDataSetResponse, AWSError>;
  /**
   * Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source.
   */
  deleteDataSource(params: QuickSight.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSourceResponse) => void): Request<QuickSight.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source.
   */
  deleteDataSource(callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSourceResponse) => void): Request<QuickSight.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes an empty folder.
   */
  deleteFolder(params: QuickSight.Types.DeleteFolderRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteFolderResponse) => void): Request<QuickSight.Types.DeleteFolderResponse, AWSError>;
  /**
   * Deletes an empty folder.
   */
  deleteFolder(callback?: (err: AWSError, data: QuickSight.Types.DeleteFolderResponse) => void): Request<QuickSight.Types.DeleteFolderResponse, AWSError>;
  /**
   * Removes an asset, such as a dashboard, analysis, or dataset, from a folder.
   */
  deleteFolderMembership(params: QuickSight.Types.DeleteFolderMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteFolderMembershipResponse) => void): Request<QuickSight.Types.DeleteFolderMembershipResponse, AWSError>;
  /**
   * Removes an asset, such as a dashboard, analysis, or dataset, from a folder.
   */
  deleteFolderMembership(callback?: (err: AWSError, data: QuickSight.Types.DeleteFolderMembershipResponse) => void): Request<QuickSight.Types.DeleteFolderMembershipResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight. 
   */
  deleteGroup(params: QuickSight.Types.DeleteGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight. 
   */
  deleteGroup(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group.
   */
  deleteGroupMembership(params: QuickSight.Types.DeleteGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group.
   */
  deleteGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Deletes an existing IAM policy assignment.
   */
  deleteIAMPolicyAssignment(params: QuickSight.Types.DeleteIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DeleteIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Deletes an existing IAM policy assignment.
   */
  deleteIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.DeleteIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DeleteIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset. 
   */
  deleteNamespace(params: QuickSight.Types.DeleteNamespaceRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteNamespaceResponse) => void): Request<QuickSight.Types.DeleteNamespaceResponse, AWSError>;
  /**
   * Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset. 
   */
  deleteNamespace(callback?: (err: AWSError, data: QuickSight.Types.DeleteNamespaceResponse) => void): Request<QuickSight.Types.DeleteNamespaceResponse, AWSError>;
  /**
   * Deletes a template.
   */
  deleteTemplate(params: QuickSight.Types.DeleteTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateResponse) => void): Request<QuickSight.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deletes a template.
   */
  deleteTemplate(callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateResponse) => void): Request<QuickSight.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.
   */
  deleteTemplateAlias(params: QuickSight.Types.DeleteTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateAliasResponse) => void): Request<QuickSight.Types.DeleteTemplateAliasResponse, AWSError>;
  /**
   * Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.
   */
  deleteTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateAliasResponse) => void): Request<QuickSight.Types.DeleteTemplateAliasResponse, AWSError>;
  /**
   * Deletes a theme.
   */
  deleteTheme(params: QuickSight.Types.DeleteThemeRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteThemeResponse) => void): Request<QuickSight.Types.DeleteThemeResponse, AWSError>;
  /**
   * Deletes a theme.
   */
  deleteTheme(callback?: (err: AWSError, data: QuickSight.Types.DeleteThemeResponse) => void): Request<QuickSight.Types.DeleteThemeResponse, AWSError>;
  /**
   * Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to.
   */
  deleteThemeAlias(params: QuickSight.Types.DeleteThemeAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteThemeAliasResponse) => void): Request<QuickSight.Types.DeleteThemeAliasResponse, AWSError>;
  /**
   * Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to.
   */
  deleteThemeAlias(callback?: (err: AWSError, data: QuickSight.Types.DeleteThemeAliasResponse) => void): Request<QuickSight.Types.DeleteThemeAliasResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call. 
   */
  deleteUser(params: QuickSight.Types.DeleteUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call. 
   */
  deleteUser(callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes a user identified by its principal ID. 
   */
  deleteUserByPrincipalId(params: QuickSight.Types.DeleteUserByPrincipalIdRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteUserByPrincipalIdResponse) => void): Request<QuickSight.Types.DeleteUserByPrincipalIdResponse, AWSError>;
  /**
   * Deletes a user identified by its principal ID. 
   */
  deleteUserByPrincipalId(callback?: (err: AWSError, data: QuickSight.Types.DeleteUserByPrincipalIdResponse) => void): Request<QuickSight.Types.DeleteUserByPrincipalIdResponse, AWSError>;
  /**
   * Describes the customizations associated with the provided Amazon Web Services account and Amazon Amazon QuickSight namespace in an Amazon Web Services Region. The Amazon QuickSight console evaluates which customizations to apply by running this API operation with the Resolved flag included.  To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved.     Amazon Web Services account - The Amazon Web Services account exists at the top of the hierarchy. It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you subscribe to Amazon QuickSight, you choose one Amazon Web Services Region to use as your home Region. That's where your free SPICE capacity is located. You can use Amazon QuickSight in any supported Amazon Web Services Region.     Amazon Web Services Region - In each Amazon Web Services Region where you sign in to Amazon QuickSight at least once, Amazon QuickSight acts as a separate instance of the same service. If you have a user directory, it resides in us-east-1, which is the US East (N. Virginia). Generally speaking, these users have access to Amazon QuickSight in any Amazon Web Services Region, unless they are constrained to a namespace.  To run the command in a different Amazon Web Services Region, you change your Region settings. If you're using the CLI, you can use one of the following options:   Use command line options.    Use named profiles.    Run aws configure to change your default Amazon Web Services Region. Use Enter to key the same settings for your keys. For more information, see Configuring the CLI.      Namespace - A QuickSight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same Amazon Web Services account and Amazon Web Services Region.    Applied customizations - Within an Amazon Web Services Region, a set of Amazon QuickSight customizations can apply to an Amazon Web Services account or to a namespace. Settings that you apply to a namespace override settings that you apply to an Amazon Web Services account. All settings are isolated to a single Amazon Web Services Region. To apply them in other Amazon Web Services Regions, run the CreateAccountCustomization command in each Amazon Web Services Region where you want to apply the same customizations.   
   */
  describeAccountCustomization(params: QuickSight.Types.DescribeAccountCustomizationRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountCustomizationResponse) => void): Request<QuickSight.Types.DescribeAccountCustomizationResponse, AWSError>;
  /**
   * Describes the customizations associated with the provided Amazon Web Services account and Amazon Amazon QuickSight namespace in an Amazon Web Services Region. The Amazon QuickSight console evaluates which customizations to apply by running this API operation with the Resolved flag included.  To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved.     Amazon Web Services account - The Amazon Web Services account exists at the top of the hierarchy. It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you subscribe to Amazon QuickSight, you choose one Amazon Web Services Region to use as your home Region. That's where your free SPICE capacity is located. You can use Amazon QuickSight in any supported Amazon Web Services Region.     Amazon Web Services Region - In each Amazon Web Services Region where you sign in to Amazon QuickSight at least once, Amazon QuickSight acts as a separate instance of the same service. If you have a user directory, it resides in us-east-1, which is the US East (N. Virginia). Generally speaking, these users have access to Amazon QuickSight in any Amazon Web Services Region, unless they are constrained to a namespace.  To run the command in a different Amazon Web Services Region, you change your Region settings. If you're using the CLI, you can use one of the following options:   Use command line options.    Use named profiles.    Run aws configure to change your default Amazon Web Services Region. Use Enter to key the same settings for your keys. For more information, see Configuring the CLI.      Namespace - A QuickSight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same Amazon Web Services account and Amazon Web Services Region.    Applied customizations - Within an Amazon Web Services Region, a set of Amazon QuickSight customizations can apply to an Amazon Web Services account or to a namespace. Settings that you apply to a namespace override settings that you apply to an Amazon Web Services account. All settings are isolated to a single Amazon Web Services Region. To apply them in other Amazon Web Services Regions, run the CreateAccountCustomization command in each Amazon Web Services Region where you want to apply the same customizations.   
   */
  describeAccountCustomization(callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountCustomizationResponse) => void): Request<QuickSight.Types.DescribeAccountCustomizationResponse, AWSError>;
  /**
   * Describes the settings that were used when your Amazon QuickSight subscription was first created in this Amazon Web Services account.
   */
  describeAccountSettings(params: QuickSight.Types.DescribeAccountSettingsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountSettingsResponse) => void): Request<QuickSight.Types.DescribeAccountSettingsResponse, AWSError>;
  /**
   * Describes the settings that were used when your Amazon QuickSight subscription was first created in this Amazon Web Services account.
   */
  describeAccountSettings(callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountSettingsResponse) => void): Request<QuickSight.Types.DescribeAccountSettingsResponse, AWSError>;
  /**
   * Use the DescribeAccountSubscription operation to receive a description of an Amazon QuickSight account's subscription. A successful API call returns an AccountInfo object that includes an account's name, subscription status, authentication type, edition, and notification email address.
   */
  describeAccountSubscription(params: QuickSight.Types.DescribeAccountSubscriptionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountSubscriptionResponse) => void): Request<QuickSight.Types.DescribeAccountSubscriptionResponse, AWSError>;
  /**
   * Use the DescribeAccountSubscription operation to receive a description of an Amazon QuickSight account's subscription. A successful API call returns an AccountInfo object that includes an account's name, subscription status, authentication type, edition, and notification email address.
   */
  describeAccountSubscription(callback?: (err: AWSError, data: QuickSight.Types.DescribeAccountSubscriptionResponse) => void): Request<QuickSight.Types.DescribeAccountSubscriptionResponse, AWSError>;
  /**
   * Provides a summary of the metadata for an analysis.
   */
  describeAnalysis(params: QuickSight.Types.DescribeAnalysisRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisResponse) => void): Request<QuickSight.Types.DescribeAnalysisResponse, AWSError>;
  /**
   * Provides a summary of the metadata for an analysis.
   */
  describeAnalysis(callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisResponse) => void): Request<QuickSight.Types.DescribeAnalysisResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of an analysis.  If you do not need to know details about the content of an Analysis, for instance if you are trying to check the status of a recently created or updated Analysis, use the  DescribeAnalysis  instead.  
   */
  describeAnalysisDefinition(params: QuickSight.Types.DescribeAnalysisDefinitionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisDefinitionResponse) => void): Request<QuickSight.Types.DescribeAnalysisDefinitionResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of an analysis.  If you do not need to know details about the content of an Analysis, for instance if you are trying to check the status of a recently created or updated Analysis, use the  DescribeAnalysis  instead.  
   */
  describeAnalysisDefinition(callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisDefinitionResponse) => void): Request<QuickSight.Types.DescribeAnalysisDefinitionResponse, AWSError>;
  /**
   * Provides the read and write permissions for an analysis.
   */
  describeAnalysisPermissions(params: QuickSight.Types.DescribeAnalysisPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisPermissionsResponse) => void): Request<QuickSight.Types.DescribeAnalysisPermissionsResponse, AWSError>;
  /**
   * Provides the read and write permissions for an analysis.
   */
  describeAnalysisPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeAnalysisPermissionsResponse) => void): Request<QuickSight.Types.DescribeAnalysisPermissionsResponse, AWSError>;
  /**
   * Provides a summary for a dashboard.
   */
  describeDashboard(params: QuickSight.Types.DescribeDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardResponse) => void): Request<QuickSight.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Provides a summary for a dashboard.
   */
  describeDashboard(callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardResponse) => void): Request<QuickSight.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of a dashboard.  If you do not need to know details about the content of a dashboard, for instance if you are trying to check the status of a recently created or updated dashboard, use the  DescribeDashboard  instead.  
   */
  describeDashboardDefinition(params: QuickSight.Types.DescribeDashboardDefinitionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardDefinitionResponse) => void): Request<QuickSight.Types.DescribeDashboardDefinitionResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of a dashboard.  If you do not need to know details about the content of a dashboard, for instance if you are trying to check the status of a recently created or updated dashboard, use the  DescribeDashboard  instead.  
   */
  describeDashboardDefinition(callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardDefinitionResponse) => void): Request<QuickSight.Types.DescribeDashboardDefinitionResponse, AWSError>;
  /**
   * Describes read and write permissions for a dashboard.
   */
  describeDashboardPermissions(params: QuickSight.Types.DescribeDashboardPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardPermissionsResponse) => void): Request<QuickSight.Types.DescribeDashboardPermissionsResponse, AWSError>;
  /**
   * Describes read and write permissions for a dashboard.
   */
  describeDashboardPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardPermissionsResponse) => void): Request<QuickSight.Types.DescribeDashboardPermissionsResponse, AWSError>;
  /**
   * Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.
   */
  describeDataSet(params: QuickSight.Types.DescribeDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetResponse) => void): Request<QuickSight.Types.DescribeDataSetResponse, AWSError>;
  /**
   * Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.
   */
  describeDataSet(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetResponse) => void): Request<QuickSight.Types.DescribeDataSetResponse, AWSError>;
  /**
   * Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  describeDataSetPermissions(params: QuickSight.Types.DescribeDataSetPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetPermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSetPermissionsResponse, AWSError>;
  /**
   * Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  describeDataSetPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetPermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSetPermissionsResponse, AWSError>;
  /**
   * Describes a data source.
   */
  describeDataSource(params: QuickSight.Types.DescribeDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourceResponse) => void): Request<QuickSight.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Describes a data source.
   */
  describeDataSource(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourceResponse) => void): Request<QuickSight.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Describes the resource permissions for a data source.
   */
  describeDataSourcePermissions(params: QuickSight.Types.DescribeDataSourcePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourcePermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSourcePermissionsResponse, AWSError>;
  /**
   * Describes the resource permissions for a data source.
   */
  describeDataSourcePermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourcePermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSourcePermissionsResponse, AWSError>;
  /**
   * Describes a folder.
   */
  describeFolder(params: QuickSight.Types.DescribeFolderRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderResponse) => void): Request<QuickSight.Types.DescribeFolderResponse, AWSError>;
  /**
   * Describes a folder.
   */
  describeFolder(callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderResponse) => void): Request<QuickSight.Types.DescribeFolderResponse, AWSError>;
  /**
   * Describes permissions for a folder.
   */
  describeFolderPermissions(params: QuickSight.Types.DescribeFolderPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderPermissionsResponse) => void): Request<QuickSight.Types.DescribeFolderPermissionsResponse, AWSError>;
  /**
   * Describes permissions for a folder.
   */
  describeFolderPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderPermissionsResponse) => void): Request<QuickSight.Types.DescribeFolderPermissionsResponse, AWSError>;
  /**
   * Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders.
   */
  describeFolderResolvedPermissions(params: QuickSight.Types.DescribeFolderResolvedPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderResolvedPermissionsResponse) => void): Request<QuickSight.Types.DescribeFolderResolvedPermissionsResponse, AWSError>;
  /**
   * Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders.
   */
  describeFolderResolvedPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeFolderResolvedPermissionsResponse) => void): Request<QuickSight.Types.DescribeFolderResolvedPermissionsResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). 
   */
  describeGroup(params: QuickSight.Types.DescribeGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). 
   */
  describeGroup(callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Use the DescribeGroupMembership operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated GroupMember object is returned.
   */
  describeGroupMembership(params: QuickSight.Types.DescribeGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupMembershipResponse) => void): Request<QuickSight.Types.DescribeGroupMembershipResponse, AWSError>;
  /**
   * Use the DescribeGroupMembership operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated GroupMember object is returned.
   */
  describeGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupMembershipResponse) => void): Request<QuickSight.Types.DescribeGroupMembershipResponse, AWSError>;
  /**
   * Describes an existing IAM policy assignment, as specified by the assignment name.
   */
  describeIAMPolicyAssignment(params: QuickSight.Types.DescribeIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DescribeIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Describes an existing IAM policy assignment, as specified by the assignment name.
   */
  describeIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.DescribeIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DescribeIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Describes a SPICE ingestion.
   */
  describeIngestion(params: QuickSight.Types.DescribeIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeIngestionResponse) => void): Request<QuickSight.Types.DescribeIngestionResponse, AWSError>;
  /**
   * Describes a SPICE ingestion.
   */
  describeIngestion(callback?: (err: AWSError, data: QuickSight.Types.DescribeIngestionResponse) => void): Request<QuickSight.Types.DescribeIngestionResponse, AWSError>;
  /**
   * Provides a summary and status of IP rules.
   */
  describeIpRestriction(params: QuickSight.Types.DescribeIpRestrictionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeIpRestrictionResponse) => void): Request<QuickSight.Types.DescribeIpRestrictionResponse, AWSError>;
  /**
   * Provides a summary and status of IP rules.
   */
  describeIpRestriction(callback?: (err: AWSError, data: QuickSight.Types.DescribeIpRestrictionResponse) => void): Request<QuickSight.Types.DescribeIpRestrictionResponse, AWSError>;
  /**
   * Describes the current namespace.
   */
  describeNamespace(params: QuickSight.Types.DescribeNamespaceRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeNamespaceResponse) => void): Request<QuickSight.Types.DescribeNamespaceResponse, AWSError>;
  /**
   * Describes the current namespace.
   */
  describeNamespace(callback?: (err: AWSError, data: QuickSight.Types.DescribeNamespaceResponse) => void): Request<QuickSight.Types.DescribeNamespaceResponse, AWSError>;
  /**
   * Describes a template's metadata.
   */
  describeTemplate(params: QuickSight.Types.DescribeTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateResponse) => void): Request<QuickSight.Types.DescribeTemplateResponse, AWSError>;
  /**
   * Describes a template's metadata.
   */
  describeTemplate(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateResponse) => void): Request<QuickSight.Types.DescribeTemplateResponse, AWSError>;
  /**
   * Describes the template alias for a template.
   */
  describeTemplateAlias(params: QuickSight.Types.DescribeTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateAliasResponse) => void): Request<QuickSight.Types.DescribeTemplateAliasResponse, AWSError>;
  /**
   * Describes the template alias for a template.
   */
  describeTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateAliasResponse) => void): Request<QuickSight.Types.DescribeTemplateAliasResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of a template.  If you do not need to know details about the content of a template, for instance if you are trying to check the status of a recently created or updated template, use the  DescribeTemplate  instead.  
   */
  describeTemplateDefinition(params: QuickSight.Types.DescribeTemplateDefinitionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateDefinitionResponse) => void): Request<QuickSight.Types.DescribeTemplateDefinitionResponse, AWSError>;
  /**
   * Provides a detailed description of the definition of a template.  If you do not need to know details about the content of a template, for instance if you are trying to check the status of a recently created or updated template, use the  DescribeTemplate  instead.  
   */
  describeTemplateDefinition(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateDefinitionResponse) => void): Request<QuickSight.Types.DescribeTemplateDefinitionResponse, AWSError>;
  /**
   * Describes read and write permissions on a template.
   */
  describeTemplatePermissions(params: QuickSight.Types.DescribeTemplatePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplatePermissionsResponse) => void): Request<QuickSight.Types.DescribeTemplatePermissionsResponse, AWSError>;
  /**
   * Describes read and write permissions on a template.
   */
  describeTemplatePermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplatePermissionsResponse) => void): Request<QuickSight.Types.DescribeTemplatePermissionsResponse, AWSError>;
  /**
   * Describes a theme.
   */
  describeTheme(params: QuickSight.Types.DescribeThemeRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeThemeResponse) => void): Request<QuickSight.Types.DescribeThemeResponse, AWSError>;
  /**
   * Describes a theme.
   */
  describeTheme(callback?: (err: AWSError, data: QuickSight.Types.DescribeThemeResponse) => void): Request<QuickSight.Types.DescribeThemeResponse, AWSError>;
  /**
   * Describes the alias for a theme.
   */
  describeThemeAlias(params: QuickSight.Types.DescribeThemeAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeThemeAliasResponse) => void): Request<QuickSight.Types.DescribeThemeAliasResponse, AWSError>;
  /**
   * Describes the alias for a theme.
   */
  describeThemeAlias(callback?: (err: AWSError, data: QuickSight.Types.DescribeThemeAliasResponse) => void): Request<QuickSight.Types.DescribeThemeAliasResponse, AWSError>;
  /**
   * Describes the read and write permissions for a theme.
   */
  describeThemePermissions(params: QuickSight.Types.DescribeThemePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeThemePermissionsResponse) => void): Request<QuickSight.Types.DescribeThemePermissionsResponse, AWSError>;
  /**
   * Describes the read and write permissions for a theme.
   */
  describeThemePermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeThemePermissionsResponse) => void): Request<QuickSight.Types.DescribeThemePermissionsResponse, AWSError>;
  /**
   * Returns information about a user, given the user name. 
   */
  describeUser(params: QuickSight.Types.DescribeUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns information about a user, given the user name. 
   */
  describeUser(callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Generates an embed URL that you can use to embed an Amazon QuickSight dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  generateEmbedUrlForAnonymousUser(params: QuickSight.Types.GenerateEmbedUrlForAnonymousUserRequest, callback?: (err: AWSError, data: QuickSight.Types.GenerateEmbedUrlForAnonymousUserResponse) => void): Request<QuickSight.Types.GenerateEmbedUrlForAnonymousUserResponse, AWSError>;
  /**
   * Generates an embed URL that you can use to embed an Amazon QuickSight dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  generateEmbedUrlForAnonymousUser(callback?: (err: AWSError, data: QuickSight.Types.GenerateEmbedUrlForAnonymousUserResponse) => void): Request<QuickSight.Types.GenerateEmbedUrlForAnonymousUserResponse, AWSError>;
  /**
   * Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user registered in an Amazon QuickSight account. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  generateEmbedUrlForRegisteredUser(params: QuickSight.Types.GenerateEmbedUrlForRegisteredUserRequest, callback?: (err: AWSError, data: QuickSight.Types.GenerateEmbedUrlForRegisteredUserResponse) => void): Request<QuickSight.Types.GenerateEmbedUrlForRegisteredUserResponse, AWSError>;
  /**
   * Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user registered in an Amazon QuickSight account. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  generateEmbedUrlForRegisteredUser(callback?: (err: AWSError, data: QuickSight.Types.GenerateEmbedUrlForRegisteredUserResponse) => void): Request<QuickSight.Types.GenerateEmbedUrlForRegisteredUserResponse, AWSError>;
  /**
   * Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon QuickSight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions.  Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the generated URL:   They must be used together.   They can be used one time only.   They are valid for 5 minutes after you run this command.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional SessionLifetimeInMinutes parameter to customize session duration.   For more information, see Embedding Analytics Using GetDashboardEmbedUrl in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  getDashboardEmbedUrl(params: QuickSight.Types.GetDashboardEmbedUrlRequest, callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon QuickSight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions.  Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the generated URL:   They must be used together.   They can be used one time only.   They are valid for 5 minutes after you run this command.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional SessionLifetimeInMinutes parameter to customize session duration.   For more information, see Embedding Analytics Using GetDashboardEmbedUrl in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
   */
  getDashboardEmbedUrl(callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Generates a session URL and authorization code that you can use to embed the Amazon Amazon QuickSight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon QuickSight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the  UpdateUser  API operation. Use  RegisterUser  API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon QuickSight User Guide:    Embedding Analytics     Customizing Access to the Amazon QuickSight Console   
   */
  getSessionEmbedUrl(params: QuickSight.Types.GetSessionEmbedUrlRequest, callback?: (err: AWSError, data: QuickSight.Types.GetSessionEmbedUrlResponse) => void): Request<QuickSight.Types.GetSessionEmbedUrlResponse, AWSError>;
  /**
   * Generates a session URL and authorization code that you can use to embed the Amazon Amazon QuickSight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon QuickSight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the  UpdateUser  API operation. Use  RegisterUser  API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon QuickSight User Guide:    Embedding Analytics     Customizing Access to the Amazon QuickSight Console   
   */
  getSessionEmbedUrl(callback?: (err: AWSError, data: QuickSight.Types.GetSessionEmbedUrlResponse) => void): Request<QuickSight.Types.GetSessionEmbedUrlResponse, AWSError>;
  /**
   * Lists Amazon QuickSight analyses that exist in the specified Amazon Web Services account.
   */
  listAnalyses(params: QuickSight.Types.ListAnalysesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListAnalysesResponse) => void): Request<QuickSight.Types.ListAnalysesResponse, AWSError>;
  /**
   * Lists Amazon QuickSight analyses that exist in the specified Amazon Web Services account.
   */
  listAnalyses(callback?: (err: AWSError, data: QuickSight.Types.ListAnalysesResponse) => void): Request<QuickSight.Types.ListAnalysesResponse, AWSError>;
  /**
   * Lists all the versions of the dashboards in the Amazon QuickSight subscription.
   */
  listDashboardVersions(params: QuickSight.Types.ListDashboardVersionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDashboardVersionsResponse) => void): Request<QuickSight.Types.ListDashboardVersionsResponse, AWSError>;
  /**
   * Lists all the versions of the dashboards in the Amazon QuickSight subscription.
   */
  listDashboardVersions(callback?: (err: AWSError, data: QuickSight.Types.ListDashboardVersionsResponse) => void): Request<QuickSight.Types.ListDashboardVersionsResponse, AWSError>;
  /**
   * Lists dashboards in an Amazon Web Services account.
   */
  listDashboards(params: QuickSight.Types.ListDashboardsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDashboardsResponse) => void): Request<QuickSight.Types.ListDashboardsResponse, AWSError>;
  /**
   * Lists dashboards in an Amazon Web Services account.
   */
  listDashboards(callback?: (err: AWSError, data: QuickSight.Types.ListDashboardsResponse) => void): Request<QuickSight.Types.ListDashboardsResponse, AWSError>;
  /**
   * Lists all of the datasets belonging to the current Amazon Web Services account in an Amazon Web Services Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.
   */
  listDataSets(params: QuickSight.Types.ListDataSetsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDataSetsResponse) => void): Request<QuickSight.Types.ListDataSetsResponse, AWSError>;
  /**
   * Lists all of the datasets belonging to the current Amazon Web Services account in an Amazon Web Services Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.
   */
  listDataSets(callback?: (err: AWSError, data: QuickSight.Types.ListDataSetsResponse) => void): Request<QuickSight.Types.ListDataSetsResponse, AWSError>;
  /**
   * Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account.
   */
  listDataSources(params: QuickSight.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDataSourcesResponse) => void): Request<QuickSight.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account.
   */
  listDataSources(callback?: (err: AWSError, data: QuickSight.Types.ListDataSourcesResponse) => void): Request<QuickSight.Types.ListDataSourcesResponse, AWSError>;
  /**
   * List all assets (DASHBOARD, ANALYSIS, and DATASET) in a folder. 
   */
  listFolderMembers(params: QuickSight.Types.ListFolderMembersRequest, callback?: (err: AWSError, data: QuickSight.Types.ListFolderMembersResponse) => void): Request<QuickSight.Types.ListFolderMembersResponse, AWSError>;
  /**
   * List all assets (DASHBOARD, ANALYSIS, and DATASET) in a folder. 
   */
  listFolderMembers(callback?: (err: AWSError, data: QuickSight.Types.ListFolderMembersResponse) => void): Request<QuickSight.Types.ListFolderMembersResponse, AWSError>;
  /**
   * Lists all folders in an account.
   */
  listFolders(params: QuickSight.Types.ListFoldersRequest, callback?: (err: AWSError, data: QuickSight.Types.ListFoldersResponse) => void): Request<QuickSight.Types.ListFoldersResponse, AWSError>;
  /**
   * Lists all folders in an account.
   */
  listFolders(callback?: (err: AWSError, data: QuickSight.Types.ListFoldersResponse) => void): Request<QuickSight.Types.ListFoldersResponse, AWSError>;
  /**
   * Lists member users in a group.
   */
  listGroupMemberships(params: QuickSight.Types.ListGroupMembershipsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists member users in a group.
   */
  listGroupMemberships(callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight. 
   */
  listGroups(params: QuickSight.Types.ListGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight. 
   */
  listGroups(callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists IAM policy assignments in the current Amazon QuickSight account.
   */
  listIAMPolicyAssignments(params: QuickSight.Types.ListIAMPolicyAssignmentsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsResponse, AWSError>;
  /**
   * Lists IAM policy assignments in the current Amazon QuickSight account.
   */
  listIAMPolicyAssignments(callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsResponse, AWSError>;
  /**
   * Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.
   */
  listIAMPolicyAssignmentsForUser(params: QuickSight.Types.ListIAMPolicyAssignmentsForUserRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse, AWSError>;
  /**
   * Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.
   */
  listIAMPolicyAssignmentsForUser(callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse, AWSError>;
  /**
   * Lists the history of SPICE ingestions for a dataset.
   */
  listIngestions(params: QuickSight.Types.ListIngestionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIngestionsResponse) => void): Request<QuickSight.Types.ListIngestionsResponse, AWSError>;
  /**
   * Lists the history of SPICE ingestions for a dataset.
   */
  listIngestions(callback?: (err: AWSError, data: QuickSight.Types.ListIngestionsResponse) => void): Request<QuickSight.Types.ListIngestionsResponse, AWSError>;
  /**
   * Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces.
   */
  listNamespaces(params: QuickSight.Types.ListNamespacesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListNamespacesResponse) => void): Request<QuickSight.Types.ListNamespacesResponse, AWSError>;
  /**
   * Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces.
   */
  listNamespaces(callback?: (err: AWSError, data: QuickSight.Types.ListNamespacesResponse) => void): Request<QuickSight.Types.ListNamespacesResponse, AWSError>;
  /**
   * Lists the tags assigned to a resource.
   */
  listTagsForResource(params: QuickSight.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTagsForResourceResponse) => void): Request<QuickSight.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags assigned to a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: QuickSight.Types.ListTagsForResourceResponse) => void): Request<QuickSight.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all the aliases of a template.
   */
  listTemplateAliases(params: QuickSight.Types.ListTemplateAliasesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplateAliasesResponse) => void): Request<QuickSight.Types.ListTemplateAliasesResponse, AWSError>;
  /**
   * Lists all the aliases of a template.
   */
  listTemplateAliases(callback?: (err: AWSError, data: QuickSight.Types.ListTemplateAliasesResponse) => void): Request<QuickSight.Types.ListTemplateAliasesResponse, AWSError>;
  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account.
   */
  listTemplateVersions(params: QuickSight.Types.ListTemplateVersionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplateVersionsResponse) => void): Request<QuickSight.Types.ListTemplateVersionsResponse, AWSError>;
  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account.
   */
  listTemplateVersions(callback?: (err: AWSError, data: QuickSight.Types.ListTemplateVersionsResponse) => void): Request<QuickSight.Types.ListTemplateVersionsResponse, AWSError>;
  /**
   * Lists all the templates in the current Amazon QuickSight account.
   */
  listTemplates(params: QuickSight.Types.ListTemplatesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplatesResponse) => void): Request<QuickSight.Types.ListTemplatesResponse, AWSError>;
  /**
   * Lists all the templates in the current Amazon QuickSight account.
   */
  listTemplates(callback?: (err: AWSError, data: QuickSight.Types.ListTemplatesResponse) => void): Request<QuickSight.Types.ListTemplatesResponse, AWSError>;
  /**
   * Lists all the aliases of a theme.
   */
  listThemeAliases(params: QuickSight.Types.ListThemeAliasesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListThemeAliasesResponse) => void): Request<QuickSight.Types.ListThemeAliasesResponse, AWSError>;
  /**
   * Lists all the aliases of a theme.
   */
  listThemeAliases(callback?: (err: AWSError, data: QuickSight.Types.ListThemeAliasesResponse) => void): Request<QuickSight.Types.ListThemeAliasesResponse, AWSError>;
  /**
   * Lists all the versions of the themes in the current Amazon Web Services account.
   */
  listThemeVersions(params: QuickSight.Types.ListThemeVersionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListThemeVersionsResponse) => void): Request<QuickSight.Types.ListThemeVersionsResponse, AWSError>;
  /**
   * Lists all the versions of the themes in the current Amazon Web Services account.
   */
  listThemeVersions(callback?: (err: AWSError, data: QuickSight.Types.ListThemeVersionsResponse) => void): Request<QuickSight.Types.ListThemeVersionsResponse, AWSError>;
  /**
   * Lists all the themes in the current Amazon Web Services account.
   */
  listThemes(params: QuickSight.Types.ListThemesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListThemesResponse) => void): Request<QuickSight.Types.ListThemesResponse, AWSError>;
  /**
   * Lists all the themes in the current Amazon Web Services account.
   */
  listThemes(callback?: (err: AWSError, data: QuickSight.Types.ListThemesResponse) => void): Request<QuickSight.Types.ListThemesResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.
   */
  listUserGroups(params: QuickSight.Types.ListUserGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.
   */
  listUserGroups(callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account. 
   */
  listUsers(params: QuickSight.Types.ListUsersRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account. 
   */
  listUsers(callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. 
   */
  registerUser(params: QuickSight.Types.RegisterUserRequest, callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. 
   */
  registerUser(callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Restores an analysis.
   */
  restoreAnalysis(params: QuickSight.Types.RestoreAnalysisRequest, callback?: (err: AWSError, data: QuickSight.Types.RestoreAnalysisResponse) => void): Request<QuickSight.Types.RestoreAnalysisResponse, AWSError>;
  /**
   * Restores an analysis.
   */
  restoreAnalysis(callback?: (err: AWSError, data: QuickSight.Types.RestoreAnalysisResponse) => void): Request<QuickSight.Types.RestoreAnalysisResponse, AWSError>;
  /**
   * Searches for analyses that belong to the user specified in the filter.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. 
   */
  searchAnalyses(params: QuickSight.Types.SearchAnalysesRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchAnalysesResponse) => void): Request<QuickSight.Types.SearchAnalysesResponse, AWSError>;
  /**
   * Searches for analyses that belong to the user specified in the filter.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. 
   */
  searchAnalyses(callback?: (err: AWSError, data: QuickSight.Types.SearchAnalysesResponse) => void): Request<QuickSight.Types.SearchAnalysesResponse, AWSError>;
  /**
   * Searches for dashboards that belong to a user.   This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. 
   */
  searchDashboards(params: QuickSight.Types.SearchDashboardsRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchDashboardsResponse) => void): Request<QuickSight.Types.SearchDashboardsResponse, AWSError>;
  /**
   * Searches for dashboards that belong to a user.   This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. 
   */
  searchDashboards(callback?: (err: AWSError, data: QuickSight.Types.SearchDashboardsResponse) => void): Request<QuickSight.Types.SearchDashboardsResponse, AWSError>;
  /**
   * Use the SearchDataSets operation to search for datasets that belong to an account.
   */
  searchDataSets(params: QuickSight.Types.SearchDataSetsRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchDataSetsResponse) => void): Request<QuickSight.Types.SearchDataSetsResponse, AWSError>;
  /**
   * Use the SearchDataSets operation to search for datasets that belong to an account.
   */
  searchDataSets(callback?: (err: AWSError, data: QuickSight.Types.SearchDataSetsResponse) => void): Request<QuickSight.Types.SearchDataSetsResponse, AWSError>;
  /**
   * Use the SearchDataSources operation to search for data sources that belong to an account.
   */
  searchDataSources(params: QuickSight.Types.SearchDataSourcesRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchDataSourcesResponse) => void): Request<QuickSight.Types.SearchDataSourcesResponse, AWSError>;
  /**
   * Use the SearchDataSources operation to search for data sources that belong to an account.
   */
  searchDataSources(callback?: (err: AWSError, data: QuickSight.Types.SearchDataSourcesResponse) => void): Request<QuickSight.Types.SearchDataSourcesResponse, AWSError>;
  /**
   * Searches the subfolders in a folder.
   */
  searchFolders(params: QuickSight.Types.SearchFoldersRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchFoldersResponse) => void): Request<QuickSight.Types.SearchFoldersResponse, AWSError>;
  /**
   * Searches the subfolders in a folder.
   */
  searchFolders(callback?: (err: AWSError, data: QuickSight.Types.SearchFoldersResponse) => void): Request<QuickSight.Types.SearchFoldersResponse, AWSError>;
  /**
   * Use the SearchGroups operation to search groups in a specified Amazon QuickSight namespace using the supplied filters.
   */
  searchGroups(params: QuickSight.Types.SearchGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchGroupsResponse) => void): Request<QuickSight.Types.SearchGroupsResponse, AWSError>;
  /**
   * Use the SearchGroups operation to search groups in a specified Amazon QuickSight namespace using the supplied filters.
   */
  searchGroups(callback?: (err: AWSError, data: QuickSight.Types.SearchGroupsResponse) => void): Request<QuickSight.Types.SearchGroupsResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified Amazon QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. Amazon QuickSight supports tagging on data set, data source, dashboard, and template.  Tagging for Amazon QuickSight works in a similar way to tagging for other Amazon Web Services services, except for the following:   You can't use tags to track costs for Amazon QuickSight. This isn't possible because you can't tag the resources that Amazon QuickSight costs are based on, for example Amazon QuickSight storage capacity (SPICE), number of users, type of users, and usage metrics.   Amazon QuickSight doesn't currently support the tag editor for Resource Groups.  
   */
  tagResource(params: QuickSight.Types.TagResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.TagResourceResponse) => void): Request<QuickSight.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified Amazon QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. Amazon QuickSight supports tagging on data set, data source, dashboard, and template.  Tagging for Amazon QuickSight works in a similar way to tagging for other Amazon Web Services services, except for the following:   You can't use tags to track costs for Amazon QuickSight. This isn't possible because you can't tag the resources that Amazon QuickSight costs are based on, for example Amazon QuickSight storage capacity (SPICE), number of users, type of users, and usage metrics.   Amazon QuickSight doesn't currently support the tag editor for Resource Groups.  
   */
  tagResource(callback?: (err: AWSError, data: QuickSight.Types.TagResourceResponse) => void): Request<QuickSight.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(params: QuickSight.Types.UntagResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.UntagResourceResponse) => void): Request<QuickSight.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: QuickSight.Types.UntagResourceResponse) => void): Request<QuickSight.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, the only customization that you can use is a theme. You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a Amazon QuickSight namespace instead. Customizations that apply to a namespace override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. 
   */
  updateAccountCustomization(params: QuickSight.Types.UpdateAccountCustomizationRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateAccountCustomizationResponse) => void): Request<QuickSight.Types.UpdateAccountCustomizationResponse, AWSError>;
  /**
   * Updates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, the only customization that you can use is a theme. You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a Amazon QuickSight namespace instead. Customizations that apply to a namespace override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. 
   */
  updateAccountCustomization(callback?: (err: AWSError, data: QuickSight.Types.UpdateAccountCustomizationResponse) => void): Request<QuickSight.Types.UpdateAccountCustomizationResponse, AWSError>;
  /**
   * Updates the Amazon QuickSight settings in your Amazon Web Services account.
   */
  updateAccountSettings(params: QuickSight.Types.UpdateAccountSettingsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateAccountSettingsResponse) => void): Request<QuickSight.Types.UpdateAccountSettingsResponse, AWSError>;
  /**
   * Updates the Amazon QuickSight settings in your Amazon Web Services account.
   */
  updateAccountSettings(callback?: (err: AWSError, data: QuickSight.Types.UpdateAccountSettingsResponse) => void): Request<QuickSight.Types.UpdateAccountSettingsResponse, AWSError>;
  /**
   * Updates an analysis in Amazon QuickSight
   */
  updateAnalysis(params: QuickSight.Types.UpdateAnalysisRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateAnalysisResponse) => void): Request<QuickSight.Types.UpdateAnalysisResponse, AWSError>;
  /**
   * Updates an analysis in Amazon QuickSight
   */
  updateAnalysis(callback?: (err: AWSError, data: QuickSight.Types.UpdateAnalysisResponse) => void): Request<QuickSight.Types.UpdateAnalysisResponse, AWSError>;
  /**
   * Updates the read and write permissions for an analysis.
   */
  updateAnalysisPermissions(params: QuickSight.Types.UpdateAnalysisPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateAnalysisPermissionsResponse) => void): Request<QuickSight.Types.UpdateAnalysisPermissionsResponse, AWSError>;
  /**
   * Updates the read and write permissions for an analysis.
   */
  updateAnalysisPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateAnalysisPermissionsResponse) => void): Request<QuickSight.Types.UpdateAnalysisPermissionsResponse, AWSError>;
  /**
   * Updates a dashboard in an Amazon Web Services account.  Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the  UpdateDashboardPublishedVersion  API operation. 
   */
  updateDashboard(params: QuickSight.Types.UpdateDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardResponse) => void): Request<QuickSight.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates a dashboard in an Amazon Web Services account.  Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the  UpdateDashboardPublishedVersion  API operation. 
   */
  updateDashboard(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardResponse) => void): Request<QuickSight.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates read and write permissions on a dashboard.
   */
  updateDashboardPermissions(params: QuickSight.Types.UpdateDashboardPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPermissionsResponse) => void): Request<QuickSight.Types.UpdateDashboardPermissionsResponse, AWSError>;
  /**
   * Updates read and write permissions on a dashboard.
   */
  updateDashboardPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPermissionsResponse) => void): Request<QuickSight.Types.UpdateDashboardPermissionsResponse, AWSError>;
  /**
   * Updates the published version of a dashboard.
   */
  updateDashboardPublishedVersion(params: QuickSight.Types.UpdateDashboardPublishedVersionRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPublishedVersionResponse) => void): Request<QuickSight.Types.UpdateDashboardPublishedVersionResponse, AWSError>;
  /**
   * Updates the published version of a dashboard.
   */
  updateDashboardPublishedVersion(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPublishedVersionResponse) => void): Request<QuickSight.Types.UpdateDashboardPublishedVersionResponse, AWSError>;
  /**
   * Updates a dataset. This operation doesn't support datasets that include uploaded files as a source. Partial updates are not supported by this operation.
   */
  updateDataSet(params: QuickSight.Types.UpdateDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetResponse) => void): Request<QuickSight.Types.UpdateDataSetResponse, AWSError>;
  /**
   * Updates a dataset. This operation doesn't support datasets that include uploaded files as a source. Partial updates are not supported by this operation.
   */
  updateDataSet(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetResponse) => void): Request<QuickSight.Types.UpdateDataSetResponse, AWSError>;
  /**
   * Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  updateDataSetPermissions(params: QuickSight.Types.UpdateDataSetPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetPermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSetPermissionsResponse, AWSError>;
  /**
   * Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  updateDataSetPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetPermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSetPermissionsResponse, AWSError>;
  /**
   * Updates a data source.
   */
  updateDataSource(params: QuickSight.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourceResponse) => void): Request<QuickSight.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a data source.
   */
  updateDataSource(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourceResponse) => void): Request<QuickSight.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates the permissions to a data source.
   */
  updateDataSourcePermissions(params: QuickSight.Types.UpdateDataSourcePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourcePermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSourcePermissionsResponse, AWSError>;
  /**
   * Updates the permissions to a data source.
   */
  updateDataSourcePermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourcePermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSourcePermissionsResponse, AWSError>;
  /**
   * Updates the name of a folder.
   */
  updateFolder(params: QuickSight.Types.UpdateFolderRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateFolderResponse) => void): Request<QuickSight.Types.UpdateFolderResponse, AWSError>;
  /**
   * Updates the name of a folder.
   */
  updateFolder(callback?: (err: AWSError, data: QuickSight.Types.UpdateFolderResponse) => void): Request<QuickSight.Types.UpdateFolderResponse, AWSError>;
  /**
   * Updates permissions of a folder.
   */
  updateFolderPermissions(params: QuickSight.Types.UpdateFolderPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateFolderPermissionsResponse) => void): Request<QuickSight.Types.UpdateFolderPermissionsResponse, AWSError>;
  /**
   * Updates permissions of a folder.
   */
  updateFolderPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateFolderPermissionsResponse) => void): Request<QuickSight.Types.UpdateFolderPermissionsResponse, AWSError>;
  /**
   * Changes a group description. 
   */
  updateGroup(params: QuickSight.Types.UpdateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Changes a group description. 
   */
  updateGroup(callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities. 
   */
  updateIAMPolicyAssignment(params: QuickSight.Types.UpdateIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.UpdateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities. 
   */
  updateIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.UpdateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.UpdateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Updates the content and status of IP rules. To use this operation, you need to provide the entire map of rules. You can use the DescribeIpRestriction operation to get the current rule map.
   */
  updateIpRestriction(params: QuickSight.Types.UpdateIpRestrictionRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateIpRestrictionResponse) => void): Request<QuickSight.Types.UpdateIpRestrictionResponse, AWSError>;
  /**
   * Updates the content and status of IP rules. To use this operation, you need to provide the entire map of rules. You can use the DescribeIpRestriction operation to get the current rule map.
   */
  updateIpRestriction(callback?: (err: AWSError, data: QuickSight.Types.UpdateIpRestrictionResponse) => void): Request<QuickSight.Types.UpdateIpRestrictionResponse, AWSError>;
  /**
   * Use the UpdatePublicSharingSettings operation to turn on or turn off the public sharing settings of an Amazon QuickSight dashboard. To use this operation, turn on session capacity pricing for your Amazon QuickSight account. Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon QuickSight, see Using Amazon QuickSight with IAM in the Amazon QuickSight User Guide.
   */
  updatePublicSharingSettings(params: QuickSight.Types.UpdatePublicSharingSettingsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdatePublicSharingSettingsResponse) => void): Request<QuickSight.Types.UpdatePublicSharingSettingsResponse, AWSError>;
  /**
   * Use the UpdatePublicSharingSettings operation to turn on or turn off the public sharing settings of an Amazon QuickSight dashboard. To use this operation, turn on session capacity pricing for your Amazon QuickSight account. Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon QuickSight, see Using Amazon QuickSight with IAM in the Amazon QuickSight User Guide.
   */
  updatePublicSharingSettings(callback?: (err: AWSError, data: QuickSight.Types.UpdatePublicSharingSettingsResponse) => void): Request<QuickSight.Types.UpdatePublicSharingSettingsResponse, AWSError>;
  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template.
   */
  updateTemplate(params: QuickSight.Types.UpdateTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateResponse) => void): Request<QuickSight.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template.
   */
  updateTemplate(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateResponse) => void): Request<QuickSight.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Updates the template alias of a template.
   */
  updateTemplateAlias(params: QuickSight.Types.UpdateTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateAliasResponse) => void): Request<QuickSight.Types.UpdateTemplateAliasResponse, AWSError>;
  /**
   * Updates the template alias of a template.
   */
  updateTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateAliasResponse) => void): Request<QuickSight.Types.UpdateTemplateAliasResponse, AWSError>;
  /**
   * Updates the resource permissions for a template.
   */
  updateTemplatePermissions(params: QuickSight.Types.UpdateTemplatePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplatePermissionsResponse) => void): Request<QuickSight.Types.UpdateTemplatePermissionsResponse, AWSError>;
  /**
   * Updates the resource permissions for a template.
   */
  updateTemplatePermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplatePermissionsResponse) => void): Request<QuickSight.Types.UpdateTemplatePermissionsResponse, AWSError>;
  /**
   * Updates a theme.
   */
  updateTheme(params: QuickSight.Types.UpdateThemeRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateThemeResponse) => void): Request<QuickSight.Types.UpdateThemeResponse, AWSError>;
  /**
   * Updates a theme.
   */
  updateTheme(callback?: (err: AWSError, data: QuickSight.Types.UpdateThemeResponse) => void): Request<QuickSight.Types.UpdateThemeResponse, AWSError>;
  /**
   * Updates an alias of a theme.
   */
  updateThemeAlias(params: QuickSight.Types.UpdateThemeAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateThemeAliasResponse) => void): Request<QuickSight.Types.UpdateThemeAliasResponse, AWSError>;
  /**
   * Updates an alias of a theme.
   */
  updateThemeAlias(callback?: (err: AWSError, data: QuickSight.Types.UpdateThemeAliasResponse) => void): Request<QuickSight.Types.UpdateThemeAliasResponse, AWSError>;
  /**
   * Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions:    User    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"      Owner    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"     "quicksight:DeleteTheme"     "quicksight:UpdateTheme"     "quicksight:CreateThemeAlias"     "quicksight:DeleteThemeAlias"     "quicksight:UpdateThemeAlias"     "quicksight:UpdateThemePermissions"     "quicksight:DescribeThemePermissions"      To specify no permissions, omit the permissions list.  
   */
  updateThemePermissions(params: QuickSight.Types.UpdateThemePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateThemePermissionsResponse) => void): Request<QuickSight.Types.UpdateThemePermissionsResponse, AWSError>;
  /**
   * Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions:    User    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"      Owner    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"     "quicksight:DeleteTheme"     "quicksight:UpdateTheme"     "quicksight:CreateThemeAlias"     "quicksight:DeleteThemeAlias"     "quicksight:UpdateThemeAlias"     "quicksight:UpdateThemePermissions"     "quicksight:DescribeThemePermissions"      To specify no permissions, omit the permissions list.  
   */
  updateThemePermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateThemePermissionsResponse) => void): Request<QuickSight.Types.UpdateThemePermissionsResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user.
   */
  updateUser(params: QuickSight.Types.UpdateUserRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user.
   */
  updateUser(callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
}
declare namespace QuickSight {
  export interface AccountCustomization {
    /**
     * The default theme for this Amazon QuickSight subscription.
     */
    DefaultTheme?: Arn;
    /**
     * The default email customization template.
     */
    DefaultEmailCustomizationTemplate?: Arn;
  }
  export interface AccountInfo {
    /**
     * The account name that you provided for the Amazon QuickSight subscription in your Amazon Web Services account. You create this name when you sign up for Amazon QuickSight. It's unique over all of Amazon Web Services, and it appears only when users sign in.
     */
    AccountName?: String;
    /**
     * The edition of your Amazon QuickSight account.
     */
    Edition?: Edition;
    /**
     * The email address that will be used for Amazon QuickSight to send notifications regarding your Amazon Web Services account or Amazon QuickSight subscription.
     */
    NotificationEmail?: String;
    /**
     * The way that your Amazon QuickSight account is authenticated.
     */
    AuthenticationType?: String;
    /**
     * The status of your account subscription.
     */
    AccountSubscriptionStatus?: String;
  }
  export interface AccountSettings {
    /**
     * The "account name" you provided for the Amazon QuickSight subscription in your Amazon Web Services account. You create this name when you sign up for Amazon QuickSight. It is unique in all of Amazon Web Services and it appears only when users sign in.
     */
    AccountName?: String;
    /**
     * The edition of Amazon QuickSight that you're currently subscribed to: Enterprise edition or Standard edition.
     */
    Edition?: Edition;
    /**
     * The default Amazon QuickSight namespace for your Amazon Web Services account. 
     */
    DefaultNamespace?: Namespace;
    /**
     * The main notification email for your Amazon QuickSight subscription.
     */
    NotificationEmail?: String;
    /**
     * A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account. For more information about turning on public sharing, see UpdatePublicSharingSettings.
     */
    PublicSharingEnabled?: Boolean;
    /**
     * A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A True value doesn't allow the account to be deleted and results in an error message if a user tries to make a DeleteAccountSubsctiption request. A False value will allow the ccount to be deleted. 
     */
    TerminationProtectionEnabled?: Boolean;
  }
  export type ActionList = String[];
  export interface ActiveIAMPolicyAssignment {
    /**
     * A name for the IAM policy assignment.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    PolicyArn?: Arn;
  }
  export type ActiveIAMPolicyAssignmentList = ActiveIAMPolicyAssignment[];
  export interface AdHocFilteringOption {
    /**
     * Availability status.
     */
    AvailabilityStatus?: DashboardBehavior;
  }
  export type AdditionalDashboardIdList = ShortRestrictiveResourceId[];
  export interface AggregationFunction {
    /**
     * Aggregation for numerical values.
     */
    NumericalAggregationFunction?: NumericalAggregationFunction;
    /**
     * Aggregation for categorical values.    COUNT: Aggregate by the total number of values, including duplicates.    DISTINCT_COUNT: Aggregate by the total number of distinct values.  
     */
    CategoricalAggregationFunction?: CategoricalAggregationFunction;
    /**
     * Aggregation for date values.    COUNT: Aggregate by the total number of values, including duplicates.    DISTINCT_COUNT: Aggregate by the total number of distinct values.    MIN: Select the smallest date value.    MAX: Select the largest date value.  
     */
    DateAggregationFunction?: DateAggregationFunction;
  }
  export interface AggregationSortConfiguration {
    /**
     * The column that determines the sort order of aggregated values.
     */
    Column: ColumnIdentifier;
    /**
     * The sort direction of values.    ASC: Sort in ascending order.    DESC: Sort in descending order.  
     */
    SortDirection: SortDirection;
    /**
     * The function that aggregates the values in Column.
     */
    AggregationFunction: AggregationFunction;
  }
  export type AggregationSortConfigurationList = AggregationSortConfiguration[];
  export type AliasName = string;
  export interface AmazonElasticsearchParameters {
    /**
     * The OpenSearch domain.
     */
    Domain: Domain;
  }
  export interface AmazonOpenSearchParameters {
    /**
     * The OpenSearch domain.
     */
    Domain: Domain;
  }
  export interface Analysis {
    /**
     * The ID of the analysis.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the analysis.
     */
    Arn?: Arn;
    /**
     * The descriptive name of the analysis.
     */
    Name?: AnalysisName;
    /**
     * Status associated with the analysis.
     */
    Status?: ResourceStatus;
    /**
     * Errors associated with the analysis.
     */
    Errors?: AnalysisErrorList;
    /**
     * The ARNs of the datasets of the analysis.
     */
    DataSetArns?: DataSetArnsList;
    /**
     * The ARN of the theme of the analysis.
     */
    ThemeArn?: Arn;
    /**
     * The time that the analysis was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The time that the analysis was last updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     */
    Sheets?: SheetList;
  }
  export interface AnalysisDefaults {
    /**
     * The configuration for default new sheet settings.
     */
    DefaultNewSheetConfiguration: DefaultNewSheetConfiguration;
  }
  export interface AnalysisDefinition {
    /**
     * An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead of dataset ARNs throughout analysis sub-structures.
     */
    DataSetIdentifierDeclarations: DataSetIdentifierDeclarationList;
    /**
     * An array of sheet definitions for an analysis. Each SheetDefinition provides detailed information about a sheet within this analysis.
     */
    Sheets?: SheetDefinitionList;
    /**
     * An array of calculated field definitions for the analysis.
     */
    CalculatedFields?: CalculatedFields;
    /**
     * An array of parameter declarations for an analysis. Parameters are named variables that can transfer a value for use by an action or an object. For more information, see Parameters in Amazon QuickSight in the Amazon QuickSight User Guide.
     */
    ParameterDeclarations?: ParameterDeclarationList;
    /**
     * Filter definitions for an analysis. For more information, see Filtering Data in Amazon QuickSight in the Amazon QuickSight User Guide.
     */
    FilterGroups?: FilterGroupList;
    /**
     *  An array of analysis-level column configurations. Column configurations can be used to set default formatting for a column to be used throughout an analysis. 
     */
    ColumnConfigurations?: ColumnConfigurationList;
    AnalysisDefaults?: AnalysisDefaults;
  }
  export interface AnalysisError {
    /**
     * The type of the analysis error.
     */
    Type?: AnalysisErrorType;
    /**
     * The message associated with the analysis error.
     */
    Message?: NonEmptyString;
    /**
     * 
     */
    ViolatedEntities?: EntityList;
  }
  export type AnalysisErrorList = AnalysisError[];
  export type AnalysisErrorType = "ACCESS_DENIED"|"SOURCE_NOT_FOUND"|"DATA_SET_NOT_FOUND"|"INTERNAL_FAILURE"|"PARAMETER_VALUE_INCOMPATIBLE"|"PARAMETER_TYPE_INVALID"|"PARAMETER_NOT_FOUND"|"COLUMN_TYPE_MISMATCH"|"COLUMN_GEOGRAPHIC_ROLE_MISMATCH"|"COLUMN_REPLACEMENT_MISSING"|string;
  export type AnalysisFilterAttribute = "QUICKSIGHT_USER"|"QUICKSIGHT_VIEWER_OR_OWNER"|"DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"|"QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_SOLE_OWNER"|"ANALYSIS_NAME"|string;
  export type AnalysisName = string;
  export interface AnalysisSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals". Valid values are "StringEquals" and "StringLike". If you set the operator value to "StringEquals", you need to provide an ownership related filter in the "NAME" field and the arn of the user or group whose folders you want to search in the "Value" field. For example, "Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". If you set the value to "StringLike", you need to provide the name of the folders you are searching for. For example, "Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test". The "StringLike" operator only supports the NAME value ANALYSIS_NAME.
     */
    Operator?: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example "Name": "QUICKSIGHT_OWNER". Valid values are defined as follows:    QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the analysis' owners or viewers are returned. Implicit permissions from folders or groups are considered.     QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are considered.    DIRECT_QUICKSIGHT_SOLE_OWNER: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered.     ANALYSIS_NAME: Any analyses whose names have a substring match to this value will be returned.  
     */
    Name?: AnalysisFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example "Value". An example is "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
     */
    Value?: String;
  }
  export type AnalysisSearchFilterList = AnalysisSearchFilter[];
  export interface AnalysisSourceEntity {
    /**
     * The source template for the source entity of the analysis.
     */
    SourceTemplate?: AnalysisSourceTemplate;
  }
  export interface AnalysisSourceTemplate {
    /**
     * The dataset references of the source template of an analysis.
     */
    DataSetReferences: DataSetReferenceList;
    /**
     * The Amazon Resource Name (ARN) of the source template of an analysis.
     */
    Arn: Arn;
  }
  export interface AnalysisSummary {
    /**
     * The Amazon Resource Name (ARN) for the analysis.
     */
    Arn?: Arn;
    /**
     * The ID of the analysis. This ID displays in the URL.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The name of the analysis. This name is displayed in the Amazon QuickSight console. 
     */
    Name?: AnalysisName;
    /**
     * The last known status for the analysis.
     */
    Status?: ResourceStatus;
    /**
     * The time that the analysis was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The time that the analysis was last updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type AnalysisSummaryList = AnalysisSummary[];
  export interface AnchorDateConfiguration {
    /**
     * The options for the date configuration. Choose one of the options below:    NOW   
     */
    AnchorOption?: AnchorOption;
    /**
     * The name of the parameter that is used for the anchor date configuration.
     */
    ParameterName?: ParameterName;
  }
  export type AnchorOption = "NOW"|string;
  export interface AnonymousUserDashboardEmbeddingConfiguration {
    /**
     * The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard. The Amazon Resource Name (ARN) of this dashboard must be included in the AuthorizedResourceArns parameter. Otherwise, the request will fail with InvalidParameterValueException.
     */
    InitialDashboardId: ShortRestrictiveResourceId;
  }
  export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
    /**
     * The visual ID for the visual that you want the user to see. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual. The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the AuthorizedResourceArns parameter. Otherwise, the request will fail with InvalidParameterValueException.
     */
    InitialDashboardVisualId: DashboardVisualId;
  }
  export interface AnonymousUserEmbeddingExperienceConfiguration {
    /**
     * The type of embedding experience. In this case, Amazon QuickSight dashboards.
     */
    Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;
    /**
     * The type of embedding experience. In this case, Amazon QuickSight visuals.
     */
    DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration;
    /**
     * The Q search bar that you want to use for anonymous user embedding.
     */
    QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration;
  }
  export interface AnonymousUserQSearchBarEmbeddingConfiguration {
    /**
     * The QuickSight Q topic ID of the topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders the Q search bar with this topic pre-selected. The Amazon Resource Name (ARN) of this Q topic must be included in the AuthorizedResourceArns parameter. Otherwise, the request will fail with InvalidParameterValueException.
     */
    InitialTopicId: RestrictiveResourceId;
  }
  export interface ArcAxisConfiguration {
    /**
     * The arc axis range of a GaugeChartVisual.
     */
    Range?: ArcAxisDisplayRange;
    /**
     * The reserved range of the arc axis.
     */
    ReserveRange?: Integer;
  }
  export interface ArcAxisDisplayRange {
    /**
     * The minimum value of the arc axis range.
     */
    Min?: Double;
    /**
     * The maximum value of the arc axis range.
     */
    Max?: Double;
  }
  export interface ArcConfiguration {
    /**
     * The option that determines the arc angle of a GaugeChartVisual.
     */
    ArcAngle?: Double;
    /**
     * The options that determine the arc thickness of a GaugeChartVisual.
     */
    ArcThickness?: ArcThicknessOptions;
  }
  export interface ArcOptions {
    /**
     * The arc thickness of a GaugeChartVisual.
     */
    ArcThickness?: ArcThickness;
  }
  export type ArcThickness = "SMALL"|"MEDIUM"|"LARGE"|"WHOLE"|string;
  export type ArcThicknessOptions = "SMALL"|"MEDIUM"|"LARGE"|string;
  export type Arn = string;
  export type ArnList = Arn[];
  export type AssignmentStatus = "ENABLED"|"DRAFT"|"DISABLED"|string;
  export interface AthenaParameters {
    /**
     * The workgroup that Amazon Athena uses.
     */
    WorkGroup?: WorkGroup;
    /**
     * Use the RoleArn structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use RoleArn to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.
     */
    RoleArn?: RoleArn;
  }
  export interface AuroraParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface AuroraPostgreSqlParameters {
    /**
     * The Amazon Aurora PostgreSQL-Compatible host to connect to.
     */
    Host: Host;
    /**
     * The port that Amazon Aurora PostgreSQL is listening on.
     */
    Port: Port;
    /**
     * The Amazon Aurora PostgreSQL database to connect to.
     */
    Database: Database;
  }
  export type AuthenticationMethodOption = "IAM_AND_QUICKSIGHT"|"IAM_ONLY"|"ACTIVE_DIRECTORY"|string;
  export type AwsAccountId = string;
  export type AwsAndAccountId = string;
  export interface AwsIotAnalyticsParameters {
    /**
     * Dataset name.
     */
    DataSetName: DataSetName;
  }
  export type AxisBinding = "PRIMARY_YAXIS"|"SECONDARY_YAXIS"|string;
  export interface AxisDataOptions {
    /**
     * The options for an axis with a numeric field.
     */
    NumericAxisOptions?: NumericAxisOptions;
    /**
     * The options for an axis with a date field.
     */
    DateAxisOptions?: DateAxisOptions;
  }
  export interface AxisDisplayDataDrivenRange {
  }
  export interface AxisDisplayMinMaxRange {
    /**
     * The minimum setup for an axis display range.
     */
    Minimum?: Double;
    /**
     * The maximum setup for an axis display range.
     */
    Maximum?: Double;
  }
  export interface AxisDisplayOptions {
    /**
     * The tick label options of an axis.
     */
    TickLabelOptions?: AxisTickLabelOptions;
    /**
     * Determines whether or not the axis line is visible.
     */
    AxisLineVisibility?: Visibility;
    /**
     * Determines whether or not the grid line is visible.
     */
    GridLineVisibility?: Visibility;
    /**
     * The data options for an axis.
     */
    DataOptions?: AxisDataOptions;
    /**
     * The scroll bar options for an axis.
     */
    ScrollbarOptions?: ScrollBarOptions;
    /**
     * The offset value that determines the starting placement of the axis within a visual's bounds.
     */
    AxisOffset?: PixelLength;
  }
  export interface AxisDisplayRange {
    /**
     * The minimum and maximum setup of an axis display range.
     */
    MinMax?: AxisDisplayMinMaxRange;
    /**
     * The data-driven setup of an axis display range.
     */
    DataDriven?: AxisDisplayDataDrivenRange;
  }
  export interface AxisLabelOptions {
    /**
     * The font configuration of the axis label.
     */
    FontConfiguration?: FontConfiguration;
    /**
     * The text for the axis label.
     */
    CustomLabel?: String;
    /**
     * The options that indicate which field the label belongs to.
     */
    ApplyTo?: AxisLabelReferenceOptions;
  }
  export type AxisLabelOptionsList = AxisLabelOptions[];
  export interface AxisLabelReferenceOptions {
    /**
     * The field that the axis label is targeted to.
     */
    FieldId: FieldId;
    /**
     * The column that the axis label is targeted to.
     */
    Column: ColumnIdentifier;
  }
  export interface AxisLinearScale {
    /**
     * The step count setup of a linear axis.
     */
    StepCount?: Integer;
    /**
     * The step size setup of a linear axis.
     */
    StepSize?: Double;
  }
  export interface AxisLogarithmicScale {
    /**
     * The base setup of a logarithmic axis scale.
     */
    Base?: Double;
  }
  export interface AxisScale {
    /**
     * The linear axis scale setup.
     */
    Linear?: AxisLinearScale;
    /**
     * The logarithmic axis scale setup.
     */
    Logarithmic?: AxisLogarithmicScale;
  }
  export interface AxisTickLabelOptions {
    /**
     * Determines whether or not the axis ticks are visible.
     */
    LabelOptions?: LabelOptions;
    /**
     * The rotation angle of the axis tick labels.
     */
    RotationAngle?: Double;
  }
  export interface BarChartAggregatedFieldWells {
    /**
     * The category (y-axis) field well of a bar chart.
     */
    Category?: DimensionFieldList;
    /**
     * The value field wells of a bar chart. Values are aggregated by category.
     */
    Values?: MeasureFieldList;
    /**
     * The color (group/color) field well of a bar chart.
     */
    Colors?: DimensionFieldList;
    /**
     * The small multiples field well of a bar chart.
     */
    SmallMultiples?: SmallMultiplesDimensionFieldList;
  }
  export interface BarChartConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: BarChartFieldWells;
    /**
     * The sort configuration of a BarChartVisual.
     */
    SortConfiguration?: BarChartSortConfiguration;
    /**
     * The orientation of the bars in a bar chart visual. There are two valid values in this structure:    HORIZONTAL: Used for charts that have horizontal bars. Visuals that use this value are horizontal bar charts, horizontal stacked bar charts, and horizontal stacked 100% bar charts.    VERTICAL: Used for charts that have vertical bars. Visuals that use this value are vertical bar charts, vertical stacked bar charts, and vertical stacked 100% bar charts.  
     */
    Orientation?: BarChartOrientation;
    /**
     * Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.
     */
    BarsArrangement?: BarsArrangement;
    /**
     * The palette (chart color) display setup of the visual.
     */
    VisualPalette?: VisualPalette;
    /**
     * The small multiples setup for the visual.
     */
    SmallMultiplesOptions?: SmallMultiplesOptions;
    /**
     * The label display options (grid line, range, scale, axis step) for bar chart category.
     */
    CategoryAxis?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility and sort icon visibility) for a bar chart.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, axis step) for a bar chart value.
     */
    ValueAxis?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility and sort icon visibility) for a bar chart value.
     */
    ValueLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.
     */
    ColorLabelOptions?: ChartAxisLabelOptions;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The reference line setup of the visual.
     */
    ReferenceLines?: ReferenceLineList;
    /**
     * The contribution analysis (anomaly configuration) setup of the visual.
     */
    ContributionAnalysisDefaults?: ContributionAnalysisDefaultList;
  }
  export interface BarChartFieldWells {
    /**
     * The aggregated field wells of a bar chart.
     */
    BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
  }
  export type BarChartOrientation = "HORIZONTAL"|"VERTICAL"|string;
  export interface BarChartSortConfiguration {
    /**
     * The sort configuration of category fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The limit on the number of categories displayed in a bar chart.
     */
    CategoryItemsLimit?: ItemsLimitConfiguration;
    /**
     * The sort configuration of color fields in a bar chart.
     */
    ColorSort?: FieldSortOptionsList;
    /**
     * The limit on the number of values displayed in a bar chart.
     */
    ColorItemsLimit?: ItemsLimitConfiguration;
    /**
     * The sort configuration of the small multiples field.
     */
    SmallMultiplesSort?: FieldSortOptionsList;
    /**
     * The limit on the number of small multiples panels that are displayed.
     */
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  }
  export interface BarChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: BarChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export type BarsArrangement = "CLUSTERED"|"STACKED"|"STACKED_PERCENT"|string;
  export type BaseMapStyleType = "LIGHT_GRAY"|"DARK_GRAY"|"STREET"|"IMAGERY"|string;
  export type BinCountLimit = number;
  export interface BinCountOptions {
    /**
     * The options that determine the bin count value.
     */
    Value?: BinCountValue;
  }
  export type BinCountValue = number;
  export interface BinWidthOptions {
    /**
     * The options that determine the bin width value.
     */
    Value?: BinWidthValue;
    /**
     * The options that determine the bin count limit.
     */
    BinCountLimit?: BinCountLimit;
  }
  export type BinWidthValue = number;
  export interface BodySectionConfiguration {
    /**
     * The unique identifier of a body section.
     */
    SectionId: ShortRestrictiveResourceId;
    /**
     * The configuration of content in a body section.
     */
    Content: BodySectionContent;
    /**
     * The style options of a body section.
     */
    Style?: SectionStyle;
    /**
     * The configuration of a page break for a section.
     */
    PageBreakConfiguration?: SectionPageBreakConfiguration;
  }
  export type BodySectionConfigurationList = BodySectionConfiguration[];
  export interface BodySectionContent {
    /**
     * The layout configuration of a body section.
     */
    Layout?: SectionLayoutConfiguration;
  }
  export type Boolean = boolean;
  export type BooleanObject = boolean;
  export interface BorderStyle {
    /**
     * The option to enable display of borders for visuals.
     */
    Show?: Boolean;
  }
  export interface BoxPlotAggregatedFieldWells {
    /**
     * The group by field well of a box plot chart. Values are grouped based on group by fields.
     */
    GroupBy?: BoxPlotDimensionFieldList;
    /**
     * The value field well of a box plot chart. Values are aggregated based on group by fields.
     */
    Values?: BoxPlotMeasureFieldList;
  }
  export interface BoxPlotChartConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: BoxPlotFieldWells;
    /**
     * The sort configuration of a BoxPlotVisual.
     */
    SortConfiguration?: BoxPlotSortConfiguration;
    /**
     * The box plot chart options for a box plot visual
     */
    BoxPlotOptions?: BoxPlotOptions;
    /**
     * The label display options (grid line, range, scale, axis step) of a box plot category.
     */
    CategoryAxis?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility and sort Icon visibility) of a box plot category.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, axis step) of a box plot category.
     */
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility and sort icon visibility) of a box plot value.
     */
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    Legend?: LegendOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The reference line setup of the visual.
     */
    ReferenceLines?: ReferenceLineList;
    /**
     * The palette (chart color) display setup of the visual.
     */
    VisualPalette?: VisualPalette;
  }
  export type BoxPlotDimensionFieldList = DimensionField[];
  export interface BoxPlotFieldWells {
    /**
     * The aggregated field wells of a box plot.
     */
    BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
  }
  export type BoxPlotFillStyle = "SOLID"|"TRANSPARENT"|string;
  export type BoxPlotMeasureFieldList = MeasureField[];
  export interface BoxPlotOptions {
    /**
     * The style options of the box plot.
     */
    StyleOptions?: BoxPlotStyleOptions;
    /**
     * Determines the visibility of the outlier in a box plot.
     */
    OutlierVisibility?: Visibility;
    /**
     * Determines the visibility of all data points of the box plot.
     */
    AllDataPointsVisibility?: Visibility;
  }
  export interface BoxPlotSortConfiguration {
    /**
     * The sort configuration of a group by fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The pagination configuration of a table visual or box plot.
     */
    PaginationConfiguration?: PaginationConfiguration;
  }
  export interface BoxPlotStyleOptions {
    /**
     * The fill styles (solid, transparent) of the box plot.
     */
    FillStyle?: BoxPlotFillStyle;
  }
  export interface BoxPlotVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: BoxPlotChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export type CIDR = string;
  export interface CalculatedColumn {
    /**
     * Column name.
     */
    ColumnName: ColumnName;
    /**
     * A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
     */
    ColumnId: ColumnId;
    /**
     * An expression that defines the calculated column.
     */
    Expression: Expression;
  }
  export type CalculatedColumnList = CalculatedColumn[];
  export interface CalculatedField {
    /**
     * The data set that is used in this calculated field.
     */
    DataSetIdentifier: DataSetIdentifier;
    /**
     * The name of the calculated field.
     */
    Name: ColumnName;
    /**
     * The expression of the calculated field.
     */
    Expression: Expression;
  }
  export type CalculatedFields = CalculatedField[];
  export interface CalculatedMeasureField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The expression in the table calculation.
     */
    Expression: Expression;
  }
  export interface CancelIngestionRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: String;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
  }
  export interface CancelIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     */
    Arn?: Arn;
    /**
     * An ID for the ingestion.
     */
    IngestionId?: IngestionId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CascadingControlConfiguration {
    /**
     * A list of source controls that determine the values that are used in the current control.
     */
    SourceControls?: CascadingControlSourceList;
  }
  export interface CascadingControlSource {
    /**
     * The source sheet control ID of a CascadingControlSource.
     */
    SourceSheetControlId?: String;
    /**
     * The column identifier that determines which column to look up for the source sheet control.
     */
    ColumnToMatch?: ColumnIdentifier;
  }
  export type CascadingControlSourceList = CascadingControlSource[];
  export interface CastColumnTypeOperation {
    /**
     * Column name.
     */
    ColumnName: ColumnName;
    /**
     * New column data type.
     */
    NewColumnType: ColumnDataType;
    /**
     * When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
     */
    Format?: TypeCastFormat;
  }
  export type Catalog = string;
  export type CategoricalAggregationFunction = "COUNT"|"DISTINCT_COUNT"|string;
  export interface CategoricalDimensionField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the CategoricalDimensionField.
     */
    Column: ColumnIdentifier;
    /**
     * The custom hierarchy ID.
     */
    HierarchyId?: HierarchyId;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: StringFormatConfiguration;
  }
  export interface CategoricalMeasureField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the CategoricalMeasureField.
     */
    Column: ColumnIdentifier;
    /**
     * The aggregation function of the measure field.
     */
    AggregationFunction?: CategoricalAggregationFunction;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: StringFormatConfiguration;
  }
  export interface CategoryDrillDownFilter {
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * A list of the string inputs that are the values of the category drill down filter.
     */
    CategoryValues: CategoryValueList;
  }
  export interface CategoryFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The configuration for a CategoryFilter.
     */
    Configuration?: CategoryFilterConfiguration;
  }
  export interface CategoryFilterConfiguration {
    /**
     * A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.
     */
    FilterListConfiguration?: FilterListConfiguration;
    /**
     * A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.
     */
    CustomFilterListConfiguration?: CustomFilterListConfiguration;
    /**
     * A custom filter that filters based on a single value. This filter can be partially matched.
     */
    CustomFilterConfiguration?: CustomFilterConfiguration;
  }
  export type CategoryFilterMatchOperator = "EQUALS"|"DOES_NOT_EQUAL"|"CONTAINS"|"DOES_NOT_CONTAIN"|"STARTS_WITH"|"ENDS_WITH"|string;
  export type CategoryFilterSelectAllOptions = "FILTER_ALL_VALUES"|string;
  export type CategoryValue = string;
  export type CategoryValueList = CategoryValue[];
  export interface ChartAxisLabelOptions {
    /**
     * The visibility of an axis label on a chart. Choose one of the following options:    VISIBLE: Shows the axis.    HIDDEN: Hides the axis.  
     */
    Visibility?: Visibility;
    /**
     * The visibility configuration of the sort icon on a chart's axis label.
     */
    SortIconVisibility?: Visibility;
    /**
     * The label options for a chart axis.
     */
    AxisLabelOptions?: AxisLabelOptionsList;
  }
  export type ClusterId = string;
  export interface ClusterMarker {
    /**
     * The simple cluster marker of the cluster marker.
     */
    SimpleClusterMarker?: SimpleClusterMarker;
  }
  export interface ClusterMarkerConfiguration {
    /**
     * The cluster marker that is a part of the cluster marker configuration
     */
    ClusterMarker?: ClusterMarker;
  }
  export type ColorFillType = "DISCRETE"|"GRADIENT"|string;
  export type ColorList = HexColor[];
  export interface ColorScale {
    /**
     * Determines the list of colors that are applied to the visual.
     */
    Colors: ColorScaleColorList;
    /**
     * Determines the color fill type.
     */
    ColorFillType: ColorFillType;
    /**
     * Determines the color that is applied to null values.
     */
    NullValueColor?: DataColor;
  }
  export type ColorScaleColorList = DataColor[];
  export interface ColumnConfiguration {
    /**
     * The column.
     */
    Column: ColumnIdentifier;
    /**
     * The format configuration of a column.
     */
    FormatConfiguration?: FormatConfiguration;
    /**
     * The role of the column.
     */
    Role?: ColumnRole;
  }
  export type ColumnConfigurationList = ColumnConfiguration[];
  export type ColumnDataType = "STRING"|"INTEGER"|"DECIMAL"|"DATETIME"|string;
  export interface ColumnDescription {
    /**
     * The text of a description for a column.
     */
    Text?: ColumnDescriptiveText;
  }
  export type ColumnDescriptiveText = string;
  export interface ColumnGroup {
    /**
     * Geospatial column group that denotes a hierarchy.
     */
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
  }
  export interface ColumnGroupColumnSchema {
    /**
     * The name of the column group's column schema.
     */
    Name?: String;
  }
  export type ColumnGroupColumnSchemaList = ColumnGroupColumnSchema[];
  export type ColumnGroupList = ColumnGroup[];
  export type ColumnGroupName = string;
  export interface ColumnGroupSchema {
    /**
     * The name of the column group schema.
     */
    Name?: String;
    /**
     * A structure containing the list of schemas for column group columns.
     */
    ColumnGroupColumnSchemaList?: ColumnGroupColumnSchemaList;
  }
  export type ColumnGroupSchemaList = ColumnGroupSchema[];
  export interface ColumnHierarchy {
    /**
     * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
     */
    ExplicitHierarchy?: ExplicitHierarchy;
    /**
     * The option that determines the hierarchy of any DateTime fields.
     */
    DateTimeHierarchy?: DateTimeHierarchy;
    /**
     * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
     */
    PredefinedHierarchy?: PredefinedHierarchy;
  }
  export type ColumnHierarchyList = ColumnHierarchy[];
  export type ColumnId = string;
  export interface ColumnIdentifier {
    /**
     * The data set that the column belongs to.
     */
    DataSetIdentifier: DataSetIdentifier;
    /**
     * The name of the column.
     */
    ColumnName: ColumnName;
  }
  export interface ColumnLevelPermissionRule {
    /**
     * An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.
     */
    Principals?: PrincipalList;
    /**
     * An array of column names.
     */
    ColumnNames?: ColumnNameList;
  }
  export type ColumnLevelPermissionRuleList = ColumnLevelPermissionRule[];
  export type ColumnList = ColumnName[];
  export type ColumnName = string;
  export type ColumnNameList = String[];
  export type ColumnRole = "DIMENSION"|"MEASURE"|string;
  export interface ColumnSchema {
    /**
     * The name of the column schema.
     */
    Name?: String;
    /**
     * The data type of the column schema.
     */
    DataType?: String;
    /**
     * The geographic role of the column schema.
     */
    GeographicRole?: String;
  }
  export type ColumnSchemaList = ColumnSchema[];
  export interface ColumnSort {
    SortBy: ColumnIdentifier;
    /**
     * The sort direction.
     */
    Direction: SortDirection;
    /**
     * The aggregation function that is defined in the column sort.
     */
    AggregationFunction?: AggregationFunction;
  }
  export interface ColumnTag {
    /**
     * A geospatial role for a column.
     */
    ColumnGeographicRole?: GeoSpatialDataRole;
    /**
     * A description for a column.
     */
    ColumnDescription?: ColumnDescription;
  }
  export type ColumnTagList = ColumnTag[];
  export type ColumnTagName = "COLUMN_GEOGRAPHIC_ROLE"|"COLUMN_DESCRIPTION"|string;
  export type ColumnTagNames = ColumnTagName[];
  export interface ColumnTooltipItem {
    /**
     * The target column of the tooltip item.
     */
    Column: ColumnIdentifier;
    /**
     * The label of the tooltip item.
     */
    Label?: String;
    /**
     * The visibility of the tooltip item.
     */
    Visibility?: Visibility;
    /**
     * The aggregation function of the column tooltip item.
     */
    Aggregation?: AggregationFunction;
  }
  export interface ComboChartAggregatedFieldWells {
    /**
     * The aggregated category field wells of a combo chart.
     */
    Category?: DimensionFieldList;
    /**
     * The aggregated BarValues field well of a combo chart.
     */
    BarValues?: MeasureFieldList;
    /**
     * The aggregated colors field well of a combo chart.
     */
    Colors?: DimensionFieldList;
    /**
     * The aggregated LineValues field well of a combo chart.
     */
    LineValues?: MeasureFieldList;
  }
  export interface ComboChartConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: ComboChartFieldWells;
    /**
     * The sort configuration of a ComboChartVisual.
     */
    SortConfiguration?: ComboChartSortConfiguration;
    /**
     * Determines the bar arrangement in a combo chart. The following are valid values in this structure:    CLUSTERED: For clustered bar combo charts.    STACKED: For stacked bar combo charts.    STACKED_PERCENT: Do not use. If you use this value, the operation returns a validation error.  
     */
    BarsArrangement?: BarsArrangement;
    /**
     * The category axis of a combo chart.
     */
    CategoryAxis?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.
     */
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.
     */
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.
     */
    SecondaryYAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.
     */
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.
     */
    ColorLabelOptions?: ChartAxisLabelOptions;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed. The data label options for a bar in a combo chart.
     */
    BarDataLabels?: DataLabelOptions;
    /**
     * The options that determine if visual data labels are displayed. The data label options for a line in a combo chart.
     */
    LineDataLabels?: DataLabelOptions;
    /**
     * The legend display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The reference line setup of the visual.
     */
    ReferenceLines?: ReferenceLineList;
    /**
     * The palette (chart color) display setup of the visual.
     */
    VisualPalette?: VisualPalette;
  }
  export interface ComboChartFieldWells {
    /**
     * The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.
     */
    ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
  }
  export interface ComboChartSortConfiguration {
    /**
     * The sort configuration of the category field well in a combo chart.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The item limit configuration for the category field well of a combo chart.
     */
    CategoryItemsLimit?: ItemsLimitConfiguration;
    /**
     * The sort configuration of the color field well in a combo chart.
     */
    ColorSort?: FieldSortOptionsList;
    /**
     * The item limit configuration of the color field well in a combo chart.
     */
    ColorItemsLimit?: ItemsLimitConfiguration;
  }
  export interface ComboChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: ComboChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface ComparisonConfiguration {
    /**
     * The method of the comparison. Choose from the following options:    DIFFERENCE     PERCENT_DIFFERENCE     PERCENT   
     */
    ComparisonMethod?: ComparisonMethod;
    /**
     * The format of the comparison.
     */
    ComparisonFormat?: ComparisonFormatConfiguration;
  }
  export interface ComparisonFormatConfiguration {
    /**
     * The number display format.
     */
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
    /**
     * The percentage display format.
     */
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
  }
  export type ComparisonMethod = "DIFFERENCE"|"PERCENT_DIFFERENCE"|"PERCENT"|string;
  export interface Computation {
    /**
     * The top ranked and bottom ranked computation configuration.
     */
    TopBottomRanked?: TopBottomRankedComputation;
    /**
     * The top movers and bottom movers computation configuration.
     */
    TopBottomMovers?: TopBottomMoversComputation;
    /**
     * The total aggregation computation configuration.
     */
    TotalAggregation?: TotalAggregationComputation;
    /**
     * The maximum and minimum computation configuration.
     */
    MaximumMinimum?: MaximumMinimumComputation;
    /**
     * The metric comparison computation configuration.
     */
    MetricComparison?: MetricComparisonComputation;
    /**
     * The period over period computation configuration.
     */
    PeriodOverPeriod?: PeriodOverPeriodComputation;
    /**
     * The period to DataSetIdentifier computation configuration.
     */
    PeriodToDate?: PeriodToDateComputation;
    /**
     * The growth rate computation configuration.
     */
    GrowthRate?: GrowthRateComputation;
    /**
     * The unique values computation configuration.
     */
    UniqueValues?: UniqueValuesComputation;
    /**
     * The forecast computation configuration.
     */
    Forecast?: ForecastComputation;
  }
  export type ComputationList = Computation[];
  export interface ConditionalFormattingColor {
    /**
     * Formatting configuration for solid color.
     */
    Solid?: ConditionalFormattingSolidColor;
    /**
     * Formatting configuration for gradient color.
     */
    Gradient?: ConditionalFormattingGradientColor;
  }
  export interface ConditionalFormattingCustomIconCondition {
    /**
     * The expression that determines the condition of the icon set.
     */
    Expression: Expression;
    /**
     * Custom icon options for an icon set.
     */
    IconOptions: ConditionalFormattingCustomIconOptions;
    /**
     * Determines the color of the icon.
     */
    Color?: HexColor;
    /**
     * Determines the icon display configuration.
     */
    DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration;
  }
  export interface ConditionalFormattingCustomIconOptions {
    /**
     * Determines the type of icon.
     */
    Icon?: Icon;
    /**
     * Determines the Unicode icon type.
     */
    UnicodeIcon?: UnicodeIcon;
  }
  export interface ConditionalFormattingGradientColor {
    /**
     * The expression that determines the formatting configuration for gradient color.
     */
    Expression: Expression;
    /**
     * Determines the color.
     */
    Color: GradientColor;
  }
  export interface ConditionalFormattingIcon {
    /**
     * Formatting configuration for icon set.
     */
    IconSet?: ConditionalFormattingIconSet;
    /**
     * Determines the custom condition for an icon set.
     */
    CustomCondition?: ConditionalFormattingCustomIconCondition;
  }
  export interface ConditionalFormattingIconDisplayConfiguration {
    /**
     * Determines the icon display configuration.
     */
    IconDisplayOption?: ConditionalFormattingIconDisplayOption;
  }
  export type ConditionalFormattingIconDisplayOption = "ICON_ONLY"|string;
  export interface ConditionalFormattingIconSet {
    /**
     * The expression that determines the formatting configuration for the icon set.
     */
    Expression: Expression;
    /**
     * Determines the icon set type.
     */
    IconSetType?: ConditionalFormattingIconSetType;
  }
  export type ConditionalFormattingIconSetType = "PLUS_MINUS"|"CHECK_X"|"THREE_COLOR_ARROW"|"THREE_GRAY_ARROW"|"CARET_UP_MINUS_DOWN"|"THREE_SHAPE"|"THREE_CIRCLE"|"FLAGS"|"BARS"|"FOUR_COLOR_ARROW"|"FOUR_GRAY_ARROW"|string;
  export interface ConditionalFormattingSolidColor {
    /**
     * The expression that determines the formatting configuration for solid color.
     */
    Expression: Expression;
    /**
     * Determines the color.
     */
    Color?: HexColor;
  }
  export interface ContributionAnalysisDefault {
    /**
     * The measure field that is used in the contribution analysis.
     */
    MeasureFieldId: FieldId;
    /**
     * The dimensions columns that are used in the contribution analysis, usually a list of ColumnIdentifiers.
     */
    ContributorDimensions: ContributorDimensionList;
  }
  export type ContributionAnalysisDefaultList = ContributionAnalysisDefault[];
  export type ContributorDimensionList = ColumnIdentifier[];
  export type CopySourceArn = string;
  export interface CreateAccountCustomizationRequest {
    /**
     * The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The Amazon QuickSight namespace that you want to add customizations to.
     */
    Namespace?: Namespace;
    /**
     * The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. You can add these to an Amazon Web Services account and a QuickSight namespace.  For example, you can add a default theme by setting AccountCustomization to the midnight theme: "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" }. Or, you can add a custom theme by specifying "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" }. 
     */
    AccountCustomization: AccountCustomization;
    /**
     * A list of the tags that you want to attach to this resource.
     */
    Tags?: TagList;
  }
  export interface CreateAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.
     */
    Arn?: Arn;
    /**
     * The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * The namespace associated with the customization you're creating. 
     */
    Namespace?: Namespace;
    /**
     * The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. 
     */
    AccountCustomization?: AccountCustomization;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateAccountSubscriptionRequest {
    /**
     * The edition of Amazon QuickSight that you want your account to have. Currently, you can choose from ENTERPRISE or ENTERPRISE_AND_Q. If you choose ENTERPRISE_AND_Q, the following parameters are required:    FirstName     LastName     EmailAddress     ContactNumber   
     */
    Edition: Edition;
    /**
     * The method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are IAM_AND_QUICKSIGHT, IAM_ONLY, and ACTIVE_DIRECTORY. If you choose ACTIVE_DIRECTORY, provide an ActiveDirectoryName and an AdminGroup associated with your Active Directory.
     */
    AuthenticationMethod: AuthenticationMethodOption;
    /**
     * The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change AccountName value after the Amazon QuickSight account is created.
     */
    AccountName: String;
    /**
     * The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.
     */
    NotificationEmail: String;
    /**
     * The name of your Active Directory. This field is required if ACTIVE_DIRECTORY is the selected authentication method of the new Amazon QuickSight account.
     */
    ActiveDirectoryName?: String;
    /**
     * The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if ACTIVE_DIRECTORY is the selected authentication method of the new Amazon QuickSight account.
     */
    Realm?: String;
    /**
     * The ID of the Active Directory that is associated with your Amazon QuickSight account.
     */
    DirectoryId?: String;
    /**
     * The admin group associated with your Active Directory. This field is required if ACTIVE_DIRECTORY is the selected authentication method of the new Amazon QuickSight account. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide.
     */
    AdminGroup?: GroupsList;
    /**
     * The author group associated with your Active Directory. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide.
     */
    AuthorGroup?: GroupsList;
    /**
     * The reader group associated with your Active Direcrtory. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide.
     */
    ReaderGroup?: GroupsList;
    /**
     * The first name of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account.
     */
    FirstName?: String;
    /**
     * The last name of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account.
     */
    LastName?: String;
    /**
     * The email address of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account.
     */
    EmailAddress?: String;
    /**
     * A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account.
     */
    ContactNumber?: String;
  }
  export interface CreateAccountSubscriptionResponse {
    /**
     * A SignupResponse object that returns information about a newly created Amazon QuickSight account.
     */
    SignupResponse?: SignupResponse;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateAnalysisRequest {
    /**
     * The ID of the Amazon Web Services account where you are creating an analysis.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the analysis that you're creating. This ID displays in the URL of the analysis.
     */
    AnalysisId: ShortRestrictiveResourceId;
    /**
     * A descriptive name for the analysis that you're creating. This name displays for the analysis in the Amazon QuickSight console. 
     */
    Name: AnalysisName;
    /**
     * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values. 
     */
    Parameters?: Parameters;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis. You can use the Permissions structure to grant permissions by providing a list of Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).  To specify no permissions, omit Permissions.
     */
    Permissions?: ResourcePermissionList;
    /**
     * A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets.
     */
    SourceEntity?: AnalysisSourceEntity;
    /**
     * The ARN for the theme to apply to the analysis that you're creating. To see the theme in the Amazon QuickSight console, make sure that you have access to it.
     */
    ThemeArn?: Arn;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
     */
    Tags?: TagList;
    /**
     * The definition of an analysis. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: AnalysisDefinition;
  }
  export interface CreateAnalysisResponse {
    /**
     * The ARN for the analysis.
     */
    Arn?: Arn;
    /**
     * The ID of the analysis.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The status of the creation of the analysis. 
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateColumnsOperation {
    /**
     * Calculated columns to create.
     */
    Columns: CalculatedColumnList;
  }
  export interface CreateDashboardRequest {
    /**
     * The ID of the Amazon Web Services account where you want to create the dashboard.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The display name of the dashboard.
     */
    Name: DashboardName;
    /**
     * The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values. 
     */
    Parameters?: Parameters;
    /**
     * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.  To specify no permissions, omit the permissions list.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The entity that you are using as a source when you create the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a SourceTemplate entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the  CreateTemplate  API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplateARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. 
     */
    SourceEntity?: DashboardSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
     */
    Tags?: TagList;
    /**
     * A description for the first version of the dashboard being created.
     */
    VersionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, Amazon QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.   
     */
    DashboardPublishOptions?: DashboardPublishOptions;
    /**
     * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard.
     */
    ThemeArn?: Arn;
    /**
     * The definition of a dashboard. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: DashboardVersionDefinition;
  }
  export interface CreateDashboardResponse {
    /**
     * The ARN of the dashboard.
     */
    Arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number of the first version that is created.
     */
    VersionArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The status of the dashboard creation request.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateDataSetRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
    /**
     * The display name for the dataset.
     */
    Name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     */
    FieldFolders?: FieldFolderMap;
    /**
     * A list of resource permissions on the dataset.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The row-level security configuration for the data that you want to create.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.
     */
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     */
    ColumnLevelPermissionRules?: ColumnLevelPermissionRuleList;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
     */
    Tags?: TagList;
    DataSetUsageConfiguration?: DataSetUsageConfiguration;
  }
  export interface CreateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateDataSourceRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. 
     */
    DataSourceId: ResourceId;
    /**
     * A display name for the data source.
     */
    Name: ResourceName;
    /**
     * The type of the data source. To return a list of all data sources, use ListDataSources. Use AMAZON_ELASTICSEARCH for Amazon OpenSearch Service.
     */
    Type: DataSourceType;
    /**
     * The parameters that Amazon QuickSight uses to connect to your underlying source.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
     */
    Credentials?: DataSourceCredentials;
    /**
     * A list of resource permissions on the data source.
     */
    Permissions?: ResourcePermissionList;
    /**
     * Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
     */
    Tags?: TagList;
  }
  export interface CreateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * The status of creating the data source.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateFolderMembershipRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The ID of the asset (the dashboard, analysis, or dataset).
     */
    MemberId: RestrictiveResourceId;
    /**
     * The type of the member, including DASHBOARD, ANALYSIS, and DATASET.
     */
    MemberType: MemberType;
  }
  export interface CreateFolderMembershipResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * Information about the member in the folder.
     */
    FolderMember?: FolderMember;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateFolderRequest {
    /**
     * The ID for the Amazon Web Services account where you want to create the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The name of the folder.
     */
    Name?: FolderName;
    /**
     * The type of folder. By default, folderType is SHARED.
     */
    FolderType?: FolderType;
    /**
     * The Amazon Resource Name (ARN) for the parent folder.  ParentFolderArn can be null. An empty parentFolderArn creates a root-level folder.
     */
    ParentFolderArn?: Arn;
    /**
     * A structure that describes the principals and the resource-level permissions of a folder. To specify no permissions, omit Permissions.
     */
    Permissions?: ResourcePermissionList;
    /**
     * Tags for the folder.
     */
    Tags?: TagList;
  }
  export interface CreateFolderResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) for the newly created folder.
     */
    Arn?: Arn;
    /**
     * The folder ID for the newly created folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The request ID for the newly created folder.
     */
    RequestId?: String;
  }
  export interface CreateGroupMembershipRequest {
    /**
     * The name of the user that you want to add to the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to add the user to.
     */
    GroupName: GroupName;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that you want the user to be a part of.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupMembershipResponse {
    /**
     * The group member.
     */
    GroupMember?: GroupMember;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateGroupRequest {
    /**
     * A name for the group that you want to create.
     */
    GroupName: GroupName;
    /**
     * A description for the group that you want to create.
     */
    Description?: GroupDescription;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that you want the group to be a part of.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateIAMPolicyAssignmentRequest {
    /**
     * The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or groups.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule. It must be unique within an Amazon Web Services account.
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The Amazon QuickSight users, groups, or both that you want to assign the policy to.
     */
    Identities?: IdentityMap;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface CreateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment. This name must be unique within the Amazon Web Services account.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID for the assignment.
     */
    AssignmentId?: String;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy that is applied to the Amazon QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The Amazon QuickSight users, groups, or both that the IAM policy is assigned to.
     */
    Identities?: IdentityMap;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateIngestionRequest {
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: String;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The type of ingestion that you want to create.
     */
    IngestionType?: IngestionType;
  }
  export interface CreateIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     */
    Arn?: Arn;
    /**
     * An ID for the ingestion.
     */
    IngestionId?: IngestionId;
    /**
     * The ingestion status.
     */
    IngestionStatus?: IngestionStatus;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateNamespaceRequest {
    /**
     * The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name that you want to use to describe the new namespace.
     */
    Namespace: Namespace;
    /**
     * Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT.
     */
    IdentityStore: IdentityStore;
    /**
     * The tags that you want to associate with the namespace that you're creating.
     */
    Tags?: TagList;
  }
  export interface CreateNamespaceResponse {
    /**
     * The ARN of the Amazon QuickSight namespace you created. 
     */
    Arn?: Arn;
    /**
     * The name of the new namespace that you created.
     */
    Name?: Namespace;
    /**
     * The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace. This is set to the region that you run CreateNamespace in. 
     */
    CapacityRegion?: String;
    /**
     * The status of the creation of the namespace. This is an asynchronous process. A status of CREATED means that your namespace is ready to use. If an error occurs, it indicates if the process is retryable or non-retryable. In the case of a non-retryable error, refer to the error message for follow-up tasks.
     */
    CreationStatus?: NamespaceStatus;
    /**
     * Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT.
     */
    IdentityStore?: IdentityStore;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateTemplateAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template that you creating an alias for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The name that you want to give to the template alias that you're creating. Don't start the alias name with the $ character. Alias names that start with $ are reserved by Amazon QuickSight. 
     */
    AliasName: AliasName;
    /**
     * The version number of the template.
     */
    TemplateVersionNumber: VersionNumber;
  }
  export interface CreateTemplateAliasResponse {
    /**
     * Information about the template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateTemplateRequest {
    /**
     * The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in each Amazon Web Services account.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * A display name for the template.
     */
    Name?: TemplateName;
    /**
     * A list of resource permissions to be set on the template. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * The entity that you are using as a source when you create the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. 
     */
    SourceEntity?: TemplateSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags?: TagList;
    /**
     * A description of the current template version being created. This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field.
     */
    VersionDescription?: VersionDescription;
    /**
     * The definition of a template. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: TemplateVersionDefinition;
  }
  export interface CreateTemplateResponse {
    /**
     * The ARN for the template.
     */
    Arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     */
    VersionArn?: Arn;
    /**
     * The ID of the template.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The template creation status.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateThemeAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme for the new theme alias.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the theme alias.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The name that you want to give to the theme alias that you are creating. The alias name can't begin with a $. Alias names that start with $ are reserved by Amazon QuickSight. 
     */
    AliasName: AliasName;
    /**
     * The version number of the theme.
     */
    ThemeVersionNumber: VersionNumber;
  }
  export interface CreateThemeAliasResponse {
    /**
     * Information about the theme alias.
     */
    ThemeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateThemeRequest {
    /**
     * The ID of the Amazon Web Services account where you want to store the new theme. 
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in each Amazon Web Services account.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * A display name for the theme.
     */
    Name: ThemeName;
    /**
     * The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis. 
     */
    BaseThemeId: ShortRestrictiveResourceId;
    /**
     * A description of the first version of the theme that you're creating. Every time UpdateTheme is called, a new version is created. Each version of the theme has a description of the version in the VersionDescription field.
     */
    VersionDescription?: VersionDescription;
    /**
     * The theme configuration, which contains the theme display properties.
     */
    Configuration: ThemeConfiguration;
    /**
     * A valid grouping of resource permissions to apply to the new theme. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
     */
    Tags?: TagList;
  }
  export interface CreateThemeResponse {
    /**
     * The Amazon Resource Name (ARN) for the theme.
     */
    Arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) for the new theme.
     */
    VersionArn?: Arn;
    /**
     * The ID of the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
    /**
     * The theme creation status.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CredentialPair {
    /**
     * User name.
     */
    Username: Username;
    /**
     * Password.
     */
    Password: Password;
    /**
     * A set of alternate data source parameters that you want to share for these credentials. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the new data source with the existing credentials. If the AlternateDataSourceParameters list is null, the DataSourceParameters originally used with these Credentials is automatically allowed.
     */
    AlternateDataSourceParameters?: DataSourceParametersList;
  }
  export type CrossDatasetTypes = "ALL_DATASETS"|"SINGLE_DATASET"|string;
  export type CurrencyCode = string;
  export interface CurrencyDisplayFormatConfiguration {
    /**
     * Determines the prefix value of the currency format.
     */
    Prefix?: Prefix;
    /**
     * Determines the suffix value of the currency format.
     */
    Suffix?: Suffix;
    /**
     * The options that determine the numeric separator configuration.
     */
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    /**
     * Determines the symbol for the currency format.
     */
    Symbol?: CurrencyCode;
    /**
     * The option that determines the decimal places configuration.
     */
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    /**
     * Determines the number scale value for the currency format.
     */
    NumberScale?: NumberScale;
    /**
     * The options that determine the negative value configuration.
     */
    NegativeValueConfiguration?: NegativeValueConfiguration;
    /**
     * The options that determine the null value format configuration.
     */
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
  }
  export interface CustomActionFilterOperation {
    /**
     * The configuration that chooses the fields to be filtered.
     */
    SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration;
    /**
     * The configuration that chooses the target visuals to be filtered.
     */
    TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration;
  }
  export interface CustomActionNavigationOperation {
    /**
     * The configuration that chooses the navigation target.
     */
    LocalNavigationConfiguration?: LocalNavigationConfiguration;
  }
  export interface CustomActionSetParametersOperation {
    /**
     * The parameter that determines the value configuration.
     */
    ParameterValueConfigurations: SetParameterValueConfigurationList;
  }
  export interface CustomActionURLOperation {
    /**
     * THe URL link of the CustomActionURLOperation.
     */
    URLTemplate: URLOperationTemplate;
    /**
     * The target of the CustomActionURLOperation. Valid values are defined as follows:    NEW_TAB: Opens the target URL in a new browser tab.    NEW_WINDOW: Opens the target URL in a new browser window.    SAME_TAB: Opens the target URL in the same browser tab.  
     */
    URLTarget: URLTargetConfiguration;
  }
  export interface CustomContentConfiguration {
    /**
     * The input URL that links to the custom content that you want in the custom visual.
     */
    ContentUrl?: URLOperationTemplate;
    /**
     * The content type of the custom content visual. You can use this to have the visual render as an image.
     */
    ContentType?: CustomContentType;
    /**
     * The sizing options for the size of the custom content visual. This structure is required when the ContentType of the visual is 'IMAGE'.
     */
    ImageScaling?: CustomContentImageScalingConfiguration;
  }
  export type CustomContentImageScalingConfiguration = "FIT_TO_HEIGHT"|"FIT_TO_WIDTH"|"DO_NOT_SCALE"|"SCALE_TO_VISUAL"|string;
  export type CustomContentType = "IMAGE"|"OTHER_EMBEDDED_CONTENT"|string;
  export interface CustomContentVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a CustomContentVisual.
     */
    ChartConfiguration?: CustomContentConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The dataset that is used to create the custom content visual. You can't create a visual without a dataset.
     */
    DataSetIdentifier: DataSetIdentifier;
  }
  export interface CustomFilterConfiguration {
    /**
     * The match operator that is used to determine if a filter should be applied.
     */
    MatchOperator: CategoryFilterMatchOperator;
    /**
     * The category value for the filter. This field is mutually exclusive to ParameterName.
     */
    CategoryValue?: CategoryValue;
    /**
     * Select all of the values. Null is not the assigned value of select all.    FILTER_ALL_VALUES   
     */
    SelectAllOptions?: CategoryFilterSelectAllOptions;
    /**
     * The parameter whose value should be used for the filter value. This field is mutually exclusive to CategoryValue.
     */
    ParameterName?: ParameterName;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
  }
  export interface CustomFilterListConfiguration {
    /**
     * The match operator that is used to determine if a filter should be applied.
     */
    MatchOperator: CategoryFilterMatchOperator;
    /**
     * The list of category values for the filter.
     */
    CategoryValues?: CategoryValueList;
    /**
     * Select all of the values. Null is not the assigned value of select all.    FILTER_ALL_VALUES   
     */
    SelectAllOptions?: CategoryFilterSelectAllOptions;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
  }
  export type CustomLabel = string;
  export interface CustomNarrativeOptions {
    /**
     * The string input of custom narrative.
     */
    Narrative: NarrativeString;
  }
  export interface CustomParameterValues {
    /**
     * A list of string-type parameter values.
     */
    StringValues?: StringDefaultValueList;
    /**
     * A list of integer-type parameter values.
     */
    IntegerValues?: IntegerDefaultValueList;
    /**
     * A list of decimal-type parameter values.
     */
    DecimalValues?: DecimalDefaultValueList;
    /**
     * A list of datetime-type parameter values.
     */
    DateTimeValues?: DateTimeDefaultValueList;
  }
  export interface CustomSql {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn: Arn;
    /**
     * A display name for the SQL query result.
     */
    Name: CustomSqlName;
    /**
     * The SQL query.
     */
    SqlQuery: SqlQuery;
    /**
     * The column schema from the SQL query result set.
     */
    Columns?: InputColumnList;
  }
  export type CustomSqlName = string;
  export interface CustomValuesConfiguration {
    /**
     * Includes the null value in custom action parameter values.
     */
    IncludeNullValue?: BooleanObject;
    CustomValues: CustomParameterValues;
  }
  export interface Dashboard {
    /**
     * Dashboard ID.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * A display name for the dashboard.
     */
    Name?: DashboardName;
    /**
     * Version.
     */
    Version?: DashboardVersion;
    /**
     * The time that this dashboard was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dashboard was published.
     */
    LastPublishedTime?: Timestamp;
    /**
     * The last time that this dashboard was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type DashboardBehavior = "ENABLED"|"DISABLED"|string;
  export interface DashboardError {
    /**
     * Type.
     */
    Type?: DashboardErrorType;
    /**
     * Message.
     */
    Message?: NonEmptyString;
    /**
     * 
     */
    ViolatedEntities?: EntityList;
  }
  export type DashboardErrorList = DashboardError[];
  export type DashboardErrorType = "ACCESS_DENIED"|"SOURCE_NOT_FOUND"|"DATA_SET_NOT_FOUND"|"INTERNAL_FAILURE"|"PARAMETER_VALUE_INCOMPATIBLE"|"PARAMETER_TYPE_INVALID"|"PARAMETER_NOT_FOUND"|"COLUMN_TYPE_MISMATCH"|"COLUMN_GEOGRAPHIC_ROLE_MISMATCH"|"COLUMN_REPLACEMENT_MISSING"|string;
  export type DashboardFilterAttribute = "QUICKSIGHT_USER"|"QUICKSIGHT_VIEWER_OR_OWNER"|"DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"|"QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_SOLE_OWNER"|"DASHBOARD_NAME"|string;
  export type DashboardName = string;
  export interface DashboardPublishOptions {
    /**
     * Ad hoc (one-time) filtering option.
     */
    AdHocFilteringOption?: AdHocFilteringOption;
    /**
     * Export to .csv option.
     */
    ExportToCSVOption?: ExportToCSVOption;
    /**
     * Sheet controls option.
     */
    SheetControlsOption?: SheetControlsOption;
    /**
     * 
     */
    VisualPublishOptions?: DashboardVisualPublishOptions;
  }
  export interface DashboardSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals". Valid values are "StringEquals" and "StringLike". If you set the operator value to "StringEquals", you need to provide an ownership related filter in the "NAME" field and the arn of the user or group whose folders you want to search in the "Value" field. For example, "Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". If you set the value to "StringLike", you need to provide the name of the folders you are searching for. For example, "Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test". The "StringLike" operator only supports the NAME value DASHBOARD_NAME.
     */
    Operator: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example, "Name": "QUICKSIGHT_OWNER". Valid values are defined as follows:    QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the dashboards's owners or viewers are returned. Implicit permissions from folders or groups are considered.    QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are considered.    DIRECT_QUICKSIGHT_SOLE_OWNER: Provide an ARN of a user or group, and any dashboards with that ARN listed as the only owner of the dashboard are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners or viewers of the dashboards are returned. Implicit permissions from folders or groups are not considered.    DASHBOARD_NAME: Any dashboards whose names have a substring match to this value will be returned.  
     */
    Name?: DashboardFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". 
     */
    Value?: String;
  }
  export type DashboardSearchFilterList = DashboardSearchFilter[];
  export interface DashboardSourceEntity {
    /**
     * Source template.
     */
    SourceTemplate?: DashboardSourceTemplate;
  }
  export interface DashboardSourceTemplate {
    /**
     * Dataset references.
     */
    DataSetReferences: DataSetReferenceList;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
  }
  export interface DashboardSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * Dashboard ID.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * A display name for the dashboard.
     */
    Name?: DashboardName;
    /**
     * The time that this dashboard was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dashboard was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Published version number.
     */
    PublishedVersionNumber?: VersionNumber;
    /**
     * The last time that this dashboard was published.
     */
    LastPublishedTime?: Timestamp;
  }
  export type DashboardSummaryList = DashboardSummary[];
  export type DashboardUIState = "EXPANDED"|"COLLAPSED"|string;
  export interface DashboardVersion {
    /**
     * The time that this dashboard version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Errors associated with this dashboard version.
     */
    Errors?: DashboardErrorList;
    /**
     * Version number for this version of the dashboard.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * Source entity ARN.
     */
    SourceEntityArn?: Arn;
    /**
     * The Amazon Resource Numbers (ARNs) for the datasets that are associated with this version of the dashboard.
     */
    DataSetArns?: DataSetArnsList;
    /**
     * Description.
     */
    Description?: VersionDescription;
    /**
     * The ARN of the theme associated with a version of the dashboard.
     */
    ThemeArn?: Arn;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     */
    Sheets?: SheetList;
  }
  export interface DashboardVersionDefinition {
    /**
     * An array of dataset identifier declarations. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.
     */
    DataSetIdentifierDeclarations: DataSetIdentifierDeclarationList;
    /**
     * An array of sheet definitions for a dashboard.
     */
    Sheets?: SheetDefinitionList;
    /**
     * An array of calculated field definitions for the dashboard.
     */
    CalculatedFields?: CalculatedFields;
    /**
     * The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object. For more information, see Parameters in Amazon QuickSight in the Amazon QuickSight User Guide.
     */
    ParameterDeclarations?: ParameterDeclarationList;
    /**
     * The filter definitions for a dashboard. For more information, see Filtering Data in Amazon QuickSight in the Amazon QuickSight User Guide.
     */
    FilterGroups?: FilterGroupList;
    /**
     * An array of dashboard-level column configurations. Column configurations are used to set the default formatting for a column that is used throughout a dashboard. 
     */
    ColumnConfigurations?: ColumnConfigurationList;
    AnalysisDefaults?: AnalysisDefaults;
  }
  export interface DashboardVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The time that this dashboard version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Version number.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * Source entity ARN.
     */
    SourceEntityArn?: Arn;
    /**
     * Description.
     */
    Description?: VersionDescription;
  }
  export type DashboardVersionSummaryList = DashboardVersionSummary[];
  export interface DashboardVisualId {
    /**
     * The ID of the dashboard that has the visual that you want to embed. The DashboardId can be found in the IDs for developers section of the Embed visual pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the DashboardId with a ListDashboards API operation.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The ID of the sheet that the has visual that you want to embed. The SheetId can be found in the IDs for developers section of the Embed visual pane of the visual's on-visual menu of the Amazon QuickSight console.
     */
    SheetId: ShortRestrictiveResourceId;
    /**
     * The ID of the visual that you want to embed. The VisualID can be found in the IDs for developers section of the Embed visual pane of the visual's on-visual menu of the Amazon QuickSight console.
     */
    VisualId: ShortRestrictiveResourceId;
  }
  export interface DashboardVisualPublishOptions {
    /**
     * 
     */
    ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
  }
  export interface DataColor {
    /**
     * The color that is applied to the data value.
     */
    Color?: HexColor;
    /**
     * The data value that the color is applied to.
     */
    DataValue?: Double;
  }
  export interface DataColorPalette {
    /**
     * The hexadecimal codes for the colors.
     */
    Colors?: ColorList;
    /**
     * The minimum and maximum hexadecimal codes that describe a color gradient. 
     */
    MinMaxGradient?: ColorList;
    /**
     * The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
     */
    EmptyFillColor?: HexColor;
  }
  export interface DataFieldSeriesItem {
    /**
     * The field ID of the field that you are setting the axis binding to.
     */
    FieldId: FieldId;
    /**
     * The field value of the field that you are setting the axis binding to.
     */
    FieldValue?: SensitiveString;
    /**
     * The axis that you are binding the field to.
     */
    AxisBinding: AxisBinding;
    /**
     * The options that determine the presentation of line series associated to the field.
     */
    Settings?: LineChartSeriesSettings;
  }
  export type DataLabelContent = "VALUE"|"PERCENT"|"VALUE_AND_PERCENT"|string;
  export interface DataLabelOptions {
    /**
     * Determines the visibility of the data labels.
     */
    Visibility?: Visibility;
    /**
     * Determines the visibility of the category field labels.
     */
    CategoryLabelVisibility?: Visibility;
    /**
     * Determines the visibility of the measure field labels.
     */
    MeasureLabelVisibility?: Visibility;
    /**
     * The option that determines the data label type.
     */
    DataLabelTypes?: DataLabelTypes;
    /**
     * Determines the position of the data labels.
     */
    Position?: DataLabelPosition;
    /**
     * Determines the content of the data labels.
     */
    LabelContent?: DataLabelContent;
    /**
     * Determines the font configuration of the data labels.
     */
    LabelFontConfiguration?: FontConfiguration;
    /**
     * Determines the color of the data labels.
     */
    LabelColor?: HexColor;
    /**
     * Determines whether overlap is enabled or disabled for the data labels.
     */
    Overlap?: DataLabelOverlap;
  }
  export type DataLabelOverlap = "DISABLE_OVERLAP"|"ENABLE_OVERLAP"|string;
  export type DataLabelPosition = "INSIDE"|"OUTSIDE"|"LEFT"|"TOP"|"BOTTOM"|"RIGHT"|string;
  export interface DataLabelType {
    /**
     * Determines the label configuration for the entire field.
     */
    FieldLabelType?: FieldLabelType;
    /**
     * The option that specifies individual data values for labels.
     */
    DataPathLabelType?: DataPathLabelType;
    /**
     * Determines the label configuration for range end value in a visual.
     */
    RangeEndsLabelType?: RangeEndsLabelType;
    /**
     * Determines the label configuration for the minimum value in a visual.
     */
    MinimumLabelType?: MinimumLabelType;
    /**
     * Determines the label configuration for the maximum value in a visual.
     */
    MaximumLabelType?: MaximumLabelType;
  }
  export type DataLabelTypes = DataLabelType[];
  export interface DataPathColor {
    /**
     * The element that the color needs to be applied to.
     */
    Element: DataPathValue;
    /**
     * The color that needs to be applied to the element.
     */
    Color: HexColor;
    /**
     * The time granularity of the field that the color needs to be applied to.
     */
    TimeGranularity?: TimeGranularity;
  }
  export type DataPathColorList = DataPathColor[];
  export interface DataPathLabelType {
    /**
     * The field ID of the field that the data label needs to be applied to.
     */
    FieldId?: FieldId;
    /**
     * The actual value of the field that is labeled.
     */
    FieldValue?: FieldValue;
    /**
     * The visibility of the data label.
     */
    Visibility?: Visibility;
  }
  export interface DataPathSort {
    /**
     * Determines the sort direction.
     */
    Direction: SortDirection;
    /**
     * The list of data paths that need to be sorted.
     */
    SortPaths: DataPathValueList;
  }
  export interface DataPathValue {
    /**
     * The field ID of the field that needs to be sorted.
     */
    FieldId: FieldId;
    /**
     * The actual value of the field that needs to be sorted.
     */
    FieldValue: FieldValue;
  }
  export type DataPathValueList = DataPathValue[];
  export interface DataSet {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The ID of the dataset.
     */
    DataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     */
    Name?: ResourceName;
    /**
     * The time that this dataset was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap?: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * The list of columns after all transforms. These columns are available in templates, analyses, and dashboards.
     */
    OutputColumns?: OutputColumnList;
    /**
     * A value that indicates whether you want to import the data into SPICE.
     */
    ImportMode?: DataSetImportMode;
    /**
     * The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't imported into SPICE.
     */
    ConsumedSpiceCapacityInBytes?: Long;
    /**
     * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     */
    FieldFolders?: FieldFolderMap;
    /**
     * The row-level security configuration for the dataset.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * The element you can use to define tags for row-level security.
     */
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     */
    ColumnLevelPermissionRules?: ColumnLevelPermissionRuleList;
    /**
     * The usage configuration to apply to child datasets that reference this dataset as a source.
     */
    DataSetUsageConfiguration?: DataSetUsageConfiguration;
  }
  export type DataSetArnsList = Arn[];
  export interface DataSetConfiguration {
    /**
     * Placeholder.
     */
    Placeholder?: String;
    /**
     * Dataset schema.
     */
    DataSetSchema?: DataSetSchema;
    /**
     * A structure containing the list of column group schemas.
     */
    ColumnGroupSchemaList?: ColumnGroupSchemaList;
  }
  export type DataSetConfigurationList = DataSetConfiguration[];
  export type DataSetFilterAttribute = "QUICKSIGHT_VIEWER_OR_OWNER"|"QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"|"DIRECT_QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_SOLE_OWNER"|"DATASET_NAME"|string;
  export type DataSetIdentifier = string;
  export interface DataSetIdentifierDeclaration {
    /**
     * The identifier of the data set, typically the data set's name.
     */
    Identifier: DataSetIdentifier;
    /**
     * The Amazon Resource Name (ARN) of the data set.
     */
    DataSetArn: Arn;
  }
  export type DataSetIdentifierDeclarationList = DataSetIdentifierDeclaration[];
  export type DataSetImportMode = "SPICE"|"DIRECT_QUERY"|string;
  export type DataSetName = string;
  export interface DataSetReference {
    /**
     * Dataset placeholder.
     */
    DataSetPlaceholder: NonEmptyString;
    /**
     * Dataset Amazon Resource Name (ARN).
     */
    DataSetArn: Arn;
  }
  export type DataSetReferenceList = DataSetReference[];
  export interface DataSetSchema {
    /**
     * A structure containing the list of column schemas.
     */
    ColumnSchemaList?: ColumnSchemaList;
  }
  export interface DataSetSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals". Valid values are "StringEquals" and "StringLike". If you set the operator value to "StringEquals", you need to provide an ownership related filter in the "NAME" field and the arn of the user or group whose datasets you want to search in the "Value" field. For example, "Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1". If you set the value to "StringLike", you need to provide the name of the datasets you are searching for. For example, "Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test". The "StringLike" operator only supports the NAME value DATASET_NAME.
     */
    Operator: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example, "Name": "QUICKSIGHT_OWNER". Valid values are defined as follows:    QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the dataset owners or viewers are returned. Implicit permissions from folders or groups are considered.    QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners of the dataset are returned. Implicit permissions from folders or groups are considered.    DIRECT_QUICKSIGHT_SOLE_OWNER: Provide an ARN of a user or group, and any datasets with that ARN listed as the only owner of the dataset are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners if the dataset are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners or viewers of the dataset are returned. Implicit permissions from folders or groups are not considered.    DATASET_NAME: Any datasets whose names have a substring match to this value will be returned.  
     */
    Name: DataSetFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_OWNER, that you want to use as a filter, for example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
     */
    Value: String;
  }
  export type DataSetSearchFilterList = DataSetSearchFilter[];
  export interface DataSetSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID of the dataset.
     */
    DataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     */
    Name?: ResourceName;
    /**
     * The time that this dataset was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * A value that indicates whether you want to import the data into SPICE.
     */
    ImportMode?: DataSetImportMode;
    /**
     * The row-level security configuration for the dataset.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * Whether or not the row level permission tags are applied.
     */
    RowLevelPermissionTagConfigurationApplied?: Boolean;
    /**
     * A value that indicates if the dataset has column level permission configured.
     */
    ColumnLevelPermissionRulesApplied?: Boolean;
  }
  export type DataSetSummaryList = DataSetSummary[];
  export interface DataSetUsageConfiguration {
    /**
     * An option that controls whether a child dataset of a direct query can use this dataset as a source.
     */
    DisableUseAsDirectQuerySource?: Boolean;
    /**
     * An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.
     */
    DisableUseAsImportedSource?: Boolean;
  }
  export interface DataSource {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * A display name for the data source.
     */
    Name?: ResourceName;
    /**
     * The type of the data source. This type indicates which database engine the data source connects to.
     */
    Type?: DataSourceType;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * The time that this data source was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this data source was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * The parameters that Amazon QuickSight uses to connect to your underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the AlternateDataSourceParameters list is null, the Credentials originally used with this DataSourceParameters are automatically allowed.
     */
    AlternateDataSourceParameters?: DataSourceParametersList;
    /**
     * The VPC connection information. You need to use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
    /**
     * Error information from the last update or the creation of the data source.
     */
    ErrorInfo?: DataSourceErrorInfo;
    /**
     * The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.
     */
    SecretArn?: SecretArn;
  }
  export interface DataSourceCredentials {
    /**
     * Credential pair. For more information, see  CredentialPair .
     */
    CredentialPair?: CredentialPair;
    /**
     * The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use. When CopySourceArn is not null, the credential pair from the data source in the ARN is used as the credentials for the DataSourceCredentials structure.
     */
    CopySourceArn?: CopySourceArn;
    /**
     * The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.
     */
    SecretArn?: SecretArn;
  }
  export interface DataSourceErrorInfo {
    /**
     * Error type.
     */
    Type?: DataSourceErrorInfoType;
    /**
     * Error message.
     */
    Message?: String;
  }
  export type DataSourceErrorInfoType = "ACCESS_DENIED"|"COPY_SOURCE_NOT_FOUND"|"TIMEOUT"|"ENGINE_VERSION_NOT_SUPPORTED"|"UNKNOWN_HOST"|"GENERIC_SQL_FAILURE"|"CONFLICT"|"UNKNOWN"|string;
  export type DataSourceFilterAttribute = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"|"DIRECT_QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_SOLE_OWNER"|"DATASOURCE_NAME"|string;
  export type DataSourceList = DataSource[];
  export interface DataSourceParameters {
    /**
     * The parameters for OpenSearch.
     */
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
    /**
     * The parameters for Amazon Athena.
     */
    AthenaParameters?: AthenaParameters;
    /**
     * The parameters for Amazon Aurora MySQL.
     */
    AuroraParameters?: AuroraParameters;
    /**
     * The parameters for Amazon Aurora.
     */
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
    /**
     * The parameters for IoT Analytics.
     */
    AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;
    /**
     * The parameters for Jira.
     */
    JiraParameters?: JiraParameters;
    /**
     * The parameters for MariaDB.
     */
    MariaDbParameters?: MariaDbParameters;
    /**
     * The parameters for MySQL.
     */
    MySqlParameters?: MySqlParameters;
    /**
     * The parameters for Oracle.
     */
    OracleParameters?: OracleParameters;
    /**
     * The parameters for PostgreSQL.
     */
    PostgreSqlParameters?: PostgreSqlParameters;
    /**
     * The parameters for Presto.
     */
    PrestoParameters?: PrestoParameters;
    /**
     * The parameters for Amazon RDS.
     */
    RdsParameters?: RdsParameters;
    /**
     * The parameters for Amazon Redshift.
     */
    RedshiftParameters?: RedshiftParameters;
    /**
     * The parameters for S3.
     */
    S3Parameters?: S3Parameters;
    /**
     * The parameters for ServiceNow.
     */
    ServiceNowParameters?: ServiceNowParameters;
    /**
     * The parameters for Snowflake.
     */
    SnowflakeParameters?: SnowflakeParameters;
    /**
     * The parameters for Spark.
     */
    SparkParameters?: SparkParameters;
    /**
     * The parameters for SQL Server.
     */
    SqlServerParameters?: SqlServerParameters;
    /**
     * The parameters for Teradata.
     */
    TeradataParameters?: TeradataParameters;
    /**
     * The parameters for Twitter.
     */
    TwitterParameters?: TwitterParameters;
    /**
     * The parameters for OpenSearch.
     */
    AmazonOpenSearchParameters?: AmazonOpenSearchParameters;
    /**
     * The parameters for Exasol.
     */
    ExasolParameters?: ExasolParameters;
    /**
     * The required parameters that are needed to connect to a Databricks data source.
     */
    DatabricksParameters?: DatabricksParameters;
  }
  export type DataSourceParametersList = DataSourceParameters[];
  export interface DataSourceSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals". Valid values are "StringEquals" and "StringLike". If you set the operator value to "StringEquals", you need to provide an ownership related filter in the "NAME" field and the arn of the user or group whose data sources you want to search in the "Value" field. For example, "Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". If you set the value to "StringLike", you need to provide the name of the data sources you are searching for. For example, "Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test". The "StringLike" operator only supports the NAME value DATASOURCE_NAME.
     */
    Operator: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example, "Name": "DIRECT_QUICKSIGHT_OWNER". Valid values are defined as follows:    DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners or viewers of the data sources are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners if the data source are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_SOLE_OWNER: Provide an ARN of a user or group, and any data sources with that ARN listed as the only owner of the data source are returned. Implicit permissions from folders or groups are not considered.    DATASOURCE_NAME: Any data sources whose names have a substring match to the provided value are returned.  
     */
    Name: DataSourceFilterAttribute;
    /**
     * The value of the named item, for example DIRECT_QUICKSIGHT_OWNER, that you want to use as a filter, for example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
     */
    Value: String;
  }
  export type DataSourceSearchFilterList = DataSourceSearchFilter[];
  export interface DataSourceSummary {
    /**
     * The arn of the datasource.
     */
    Arn?: Arn;
    /**
     * The unique ID of the data source.
     */
    DataSourceId?: ResourceId;
    /**
     * The name of the data source.
     */
    Name?: ResourceName;
    /**
     * The type of the data source.
     */
    Type?: DataSourceType;
    /**
     * The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.
     */
    CreatedTime?: Timestamp;
    /**
     * The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type DataSourceSummaryList = DataSourceSummary[];
  export type DataSourceType = "ADOBE_ANALYTICS"|"AMAZON_ELASTICSEARCH"|"ATHENA"|"AURORA"|"AURORA_POSTGRESQL"|"AWS_IOT_ANALYTICS"|"GITHUB"|"JIRA"|"MARIADB"|"MYSQL"|"ORACLE"|"POSTGRESQL"|"PRESTO"|"REDSHIFT"|"S3"|"SALESFORCE"|"SERVICENOW"|"SNOWFLAKE"|"SPARK"|"SQLSERVER"|"TERADATA"|"TWITTER"|"TIMESTREAM"|"AMAZON_OPENSEARCH"|"EXASOL"|"DATABRICKS"|string;
  export type Database = string;
  export interface DatabricksParameters {
    /**
     * The host name of the Databricks data source.
     */
    Host: Host;
    /**
     * The port for the Databricks data source.
     */
    Port: Port;
    /**
     * The HTTP path of the Databricks data source.
     */
    SqlEndpointPath: SqlEndpointPath;
  }
  export type DateAggregationFunction = "COUNT"|"DISTINCT_COUNT"|"MIN"|"MAX"|string;
  export interface DateAxisOptions {
    /**
     * Determines whether or not missing dates are displayed.
     */
    MissingDateVisibility?: Visibility;
  }
  export interface DateDimensionField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the DateDimensionField.
     */
    Column: ColumnIdentifier;
    /**
     * The date granularity of the DateDimensionField. Choose one of the following options:    YEAR     QUARTER     MONTH     WEEK     DAY     HOUR     MINUTE     SECOND     MILLISECOND   
     */
    DateGranularity?: TimeGranularity;
    /**
     * The custom hierarchy ID.
     */
    HierarchyId?: HierarchyId;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: DateTimeFormatConfiguration;
  }
  export interface DateMeasureField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the DateMeasureField.
     */
    Column: ColumnIdentifier;
    /**
     * The aggregation function of the measure field.
     */
    AggregationFunction?: DateAggregationFunction;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: DateTimeFormatConfiguration;
  }
  export type DateTimeDefaultValueList = SensitiveTimestamp[];
  export interface DateTimeDefaultValues {
    /**
     * The dynamic value of the DataTimeDefaultValues. Different defaults are displayed according to users, groups, and values mapping.
     */
    DynamicValue?: DynamicDefaultValue;
    /**
     * The static values of the DataTimeDefaultValues.
     */
    StaticValues?: DateTimeDefaultValueList;
    /**
     * The rolling date of the DataTimeDefaultValues. The date is determined from the dataset based on input expression.
     */
    RollingDate?: RollingDateConfiguration;
  }
  export type DateTimeFormat = string;
  export interface DateTimeFormatConfiguration {
    /**
     * Determines the DateTime format.
     */
    DateTimeFormat?: DateTimeFormat;
    /**
     * The options that determine the null value format configuration.
     */
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    /**
     * The formatting configuration for numeric DateTime fields.
     */
    NumericFormatConfiguration?: NumericFormatConfiguration;
  }
  export interface DateTimeHierarchy {
    /**
     * The hierarchy ID of the DateTime hierarchy.
     */
    HierarchyId: HierarchyId;
    /**
     * The option that determines the drill down filters for the DateTime hierarchy.
     */
    DrillDownFilters?: DrillDownFilterList;
  }
  export interface DateTimeParameter {
    /**
     * A display name for the date-time parameter.
     */
    Name: NonEmptyString;
    /**
     * The values for the date-time parameter.
     */
    Values: SensitiveTimestampList;
  }
  export interface DateTimeParameterDeclaration {
    /**
     * The name of the parameter that is being declared.
     */
    Name: ParameterName;
    /**
     * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
     */
    DefaultValues?: DateTimeDefaultValues;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity?: TimeGranularity;
    /**
     * The configuration that defines the default value of a DateTime parameter when a value has not been set.
     */
    ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;
  }
  export type DateTimeParameterList = DateTimeParameter[];
  export interface DateTimePickerControlDisplayOptions {
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
    /**
     * Customize how dates are formatted in controls.
     */
    DateTimeFormat?: DateTimeFormat;
  }
  export interface DateTimeValueWhenUnsetConfiguration {
    /**
     * The built-in options for default values. The value can be one of the following:    RECOMMENDED: The recommended value.    NULL: The NULL value.  
     */
    ValueWhenUnsetOption?: ValueWhenUnsetOption;
    /**
     * A custom value that's used when the value of a parameter isn't set.
     */
    CustomValue?: SensitiveTimestamp;
  }
  export type DecimalDefaultValueList = SensitiveDoubleObject[];
  export interface DecimalDefaultValues {
    /**
     * The dynamic value of the DecimalDefaultValues. Different defaults are displayed according to users, groups, and values mapping.
     */
    DynamicValue?: DynamicDefaultValue;
    /**
     * The static values of the DecimalDefaultValues.
     */
    StaticValues?: DecimalDefaultValueList;
  }
  export interface DecimalParameter {
    /**
     * A display name for the decimal parameter.
     */
    Name: NonEmptyString;
    /**
     * The values for the decimal parameter.
     */
    Values: SensitiveDoubleList;
  }
  export interface DecimalParameterDeclaration {
    /**
     * The value type determines whether the parameter is a single-value or multi-value parameter.
     */
    ParameterValueType: ParameterValueType;
    /**
     * The name of the parameter that is being declared.
     */
    Name: ParameterName;
    /**
     * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
     */
    DefaultValues?: DecimalDefaultValues;
    /**
     * The configuration that defines the default value of a Decimal parameter when a value has not been set.
     */
    ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;
  }
  export type DecimalParameterList = DecimalParameter[];
  export type DecimalPlaces = number;
  export interface DecimalPlacesConfiguration {
    /**
     * The values of the decimal places.
     */
    DecimalPlaces: DecimalPlaces;
  }
  export interface DecimalValueWhenUnsetConfiguration {
    /**
     * The built-in options for default values. The value can be one of the following:    RECOMMENDED: The recommended value.    NULL: The NULL value.  
     */
    ValueWhenUnsetOption?: ValueWhenUnsetOption;
    /**
     * A custom value that's used when the value of a parameter isn't set.
     */
    CustomValue?: SensitiveDouble;
  }
  export interface DefaultFreeFormLayoutConfiguration {
    /**
     * Determines the screen canvas size options for a free-form layout.
     */
    CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions;
  }
  export interface DefaultGridLayoutConfiguration {
    /**
     * Determines the screen canvas size options for a grid layout.
     */
    CanvasSizeOptions: GridLayoutCanvasSizeOptions;
  }
  export interface DefaultInteractiveLayoutConfiguration {
    /**
     * The options that determine the default settings for a grid layout configuration.
     */
    Grid?: DefaultGridLayoutConfiguration;
    /**
     * The options that determine the default settings of a free-form layout configuration.
     */
    FreeForm?: DefaultFreeFormLayoutConfiguration;
  }
  export interface DefaultNewSheetConfiguration {
    /**
     * The options that determine the default settings for interactive layout configuration.
     */
    InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;
    /**
     * The options that determine the default settings for a paginated layout configuration.
     */
    PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;
    /**
     * The option that determines the sheet content type.
     */
    SheetContentType?: SheetContentType;
  }
  export interface DefaultPaginatedLayoutConfiguration {
    /**
     * The options that determine the default settings for a section-based layout configuration.
     */
    SectionBased?: DefaultSectionBasedLayoutConfiguration;
  }
  export interface DefaultSectionBasedLayoutConfiguration {
    /**
     * Determines the screen canvas size options for a section-based layout.
     */
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
  }
  export interface DeleteAccountCustomizationRequest {
    /**
     * The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in this Amazon Web Services Region.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The Amazon QuickSight namespace that you're deleting the customizations from.
     */
    Namespace?: Namespace;
  }
  export interface DeleteAccountCustomizationResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteAccountSubscriptionRequest {
    /**
     * The Amazon Web Services account ID of the account that you want to delete.
     */
    AwsAccountId: AwsAccountId;
  }
  export interface DeleteAccountSubscriptionResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteAnalysisRequest {
    /**
     * The ID of the Amazon Web Services account where you want to delete an analysis.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're deleting.
     */
    AnalysisId: ShortRestrictiveResourceId;
    /**
     * A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30.
     */
    RecoveryWindowInDays?: RecoveryWindowInDays;
    /**
     * This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted. 
     */
    ForceDeleteWithoutRecovery?: Boolean;
  }
  export interface DeleteAnalysisResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the deleted analysis.
     */
    Arn?: Arn;
    /**
     * The ID of the deleted analysis.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The date and time that the analysis is scheduled to be deleted.
     */
    DeletionTime?: Timestamp;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteDashboardRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're deleting.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.
     */
    VersionNumber?: VersionNumber;
  }
  export interface DeleteDashboardResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Secure Socket Layer (SSL) properties that apply for the resource.
     */
    Arn?: Arn;
    /**
     * The ID of the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteDataSetRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
  }
  export interface DeleteDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteDataSourceRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId: ResourceId;
  }
  export interface DeleteDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source that you deleted.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteFolderMembershipRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The Folder ID.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The ID of the asset (the dashboard, analysis, or dataset) that you want to delete.
     */
    MemberId: RestrictiveResourceId;
    /**
     * The type of the member, including DASHBOARD, ANALYSIS, and DATASET 
     */
    MemberType: MemberType;
  }
  export interface DeleteFolderMembershipResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteFolderRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
  }
  export interface DeleteFolderResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name of the deleted folder.
     */
    Arn?: Arn;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteGroupMembershipRequest {
    /**
     * The name of the user that you want to delete from the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to delete the user from.
     */
    GroupName: GroupName;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace of the group that you want to remove a user from.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupMembershipResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteGroupRequest {
    /**
     * The name of the group that you want to delete.
     */
    GroupName: GroupName;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace of the group that you want to delete.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteIAMPolicyAssignmentRequest {
    /**
     * The Amazon Web Services account ID where you want to delete the IAM policy assignment.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment. 
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface DeleteIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment. 
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteNamespaceRequest {
    /**
     * The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that you want to delete.
     */
    Namespace: Namespace;
  }
  export interface DeleteNamespaceResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteTemplateAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the item to delete.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template that the specified alias is for.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. 
     */
    AliasName: AliasName;
  }
  export interface DeleteTemplateAliasResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * An ID for the template associated with the deletion.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The name for the template alias.
     */
    AliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the template you want to delete.
     */
    Arn?: Arn;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteTemplateRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template that you're deleting.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template you want to delete.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template. 
     */
    VersionNumber?: VersionNumber;
  }
  export interface DeleteTemplateResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * An ID for the template.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteThemeAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme alias to delete.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme that the specified alias is for.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The unique name for the theme alias to delete.
     */
    AliasName: AliasName;
  }
  export interface DeleteThemeAliasResponse {
    /**
     * The name for the theme alias.
     */
    AliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the theme resource using the deleted alias.
     */
    Arn?: Arn;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * An ID for the theme associated with the deletion.
     */
    ThemeId?: ShortRestrictiveResourceId;
  }
  export interface DeleteThemeRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme that you're deleting.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the theme that you want to delete.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The version of the theme that you want to delete.   Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme.
     */
    VersionNumber?: VersionNumber;
  }
  export interface DeleteThemeResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * An ID for the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
  }
  export interface DeleteUserByPrincipalIdRequest {
    /**
     * The principal ID of the user.
     */
    PrincipalId: String;
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteUserByPrincipalIdResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteUserRequest {
    /**
     * The name of the user that you want to delete.
     */
    UserName: UserName;
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteUserResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type Delimiter = string;
  export interface DescribeAccountCustomizationRequest {
    /**
     * The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations for.
     */
    Namespace?: Namespace;
    /**
     * The Resolved flag works with the other parameters to determine which view of Amazon QuickSight customizations is returned. You can add this flag to your command to use the same view that Amazon QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels. 
     */
    Resolved?: boolean;
  }
  export interface DescribeAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.
     */
    Arn?: Arn;
    /**
     * The ID for the Amazon Web Services account that you're describing.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * The Amazon QuickSight namespace that you're describing. 
     */
    Namespace?: Namespace;
    /**
     * The Amazon QuickSight customizations that exist in the current Amazon Web Services Region. 
     */
    AccountCustomization?: AccountCustomization;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeAccountSettingsRequest {
    /**
     * The ID for the Amazon Web Services account that contains the settings that you want to list.
     */
    AwsAccountId: AwsAccountId;
  }
  export interface DescribeAccountSettingsResponse {
    /**
     * The Amazon QuickSight settings for this Amazon Web Services account. This information includes the edition of Amazon Amazon QuickSight that you subscribed to (Standard or Enterprise) and the notification email for the Amazon QuickSight subscription.  In the QuickSight console, the Amazon QuickSight subscription is sometimes referred to as a QuickSight "account" even though it's technically not an account by itself. Instead, it's a subscription to the Amazon QuickSight service for your Amazon Web Services account. The edition that you subscribe to applies to Amazon QuickSight in every Amazon Web Services Region where you use it.
     */
    AccountSettings?: AccountSettings;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeAccountSubscriptionRequest {
    /**
     * The Amazon Web Services account ID associated with your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
  }
  export interface DescribeAccountSubscriptionResponse {
    /**
     * A structure that contains the following elements:   Your Amazon QuickSight account name.   The edition of Amazon QuickSight that your account is using.   The notification email address that is associated with the Amazon QuickSight account.    The authentication type of the Amazon QuickSight account.   The status of the Amazon QuickSight account's subscription.  
     */
    AccountInfo?: AccountInfo;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeAnalysisDefinitionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're describing. The ID is part of the URL of the analysis.
     */
    AnalysisId: ShortRestrictiveResourceId;
  }
  export interface DescribeAnalysisDefinitionResponse {
    /**
     * The ID of the analysis described.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The descriptive name of the analysis.
     */
    Name?: AnalysisName;
    /**
     * Errors associated with the analysis.
     */
    Errors?: AnalysisErrorList;
    /**
     * Status associated with the analysis.    CREATION_IN_PROGRESS     CREATION_SUCCESSFUL     CREATION_FAILED     UPDATE_IN_PROGRESS     UPDATE_SUCCESSFUL     UPDATE_FAILED     DELETED   
     */
    ResourceStatus?: ResourceStatus;
    /**
     * The ARN of the theme of the analysis.
     */
    ThemeArn?: Arn;
    /**
     * The definition of an analysis. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: AnalysisDefinition;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeAnalysisPermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis whose permissions you're describing. You must be using the Amazon Web Services account that the analysis is in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis whose permissions you're describing. The ID is part of the analysis URL.
     */
    AnalysisId: ShortRestrictiveResourceId;
  }
  export interface DescribeAnalysisPermissionsResponse {
    /**
     * The ID of the analysis whose permissions you're describing.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the analysis whose permissions you're describing.
     */
    AnalysisArn?: Arn;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeAnalysisRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're describing. The ID is part of the URL of the analysis.
     */
    AnalysisId: ShortRestrictiveResourceId;
  }
  export interface DescribeAnalysisResponse {
    /**
     * A metadata structure that contains summary information for the analysis that you're describing.
     */
    Analysis?: Analysis;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeDashboardDefinitionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described. 
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias name.
     */
    AliasName?: AliasName;
  }
  export interface DescribeDashboardDefinitionResponse {
    /**
     * The ID of the dashboard described.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * Errors associated with this dashboard version.
     */
    Errors?: DashboardErrorList;
    /**
     * The display name of the dashboard.
     */
    Name?: DashboardName;
    /**
     * Status associated with the dashboard version.    CREATION_IN_PROGRESS     CREATION_SUCCESSFUL     CREATION_FAILED     UPDATE_IN_PROGRESS     UPDATE_SUCCESSFUL     UPDATE_FAILED     DELETED   
     */
    ResourceStatus?: ResourceStatus;
    /**
     * The ARN of the theme of the dashboard.
     */
    ThemeArn?: Arn;
    /**
     * The definition of a dashboard. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: DashboardVersionDefinition;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeDashboardPermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're describing permissions for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     */
    DashboardId: ShortRestrictiveResourceId;
  }
  export interface DescribeDashboardPermissionsResponse {
    /**
     * The ID for the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * A structure that contains the permissions for the dashboard.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * A structure that contains the configuration of a shareable link that grants access to the dashboard. Your users can use the link to view and interact with the dashboard, if the dashboard has been shared with them. For more information about sharing dashboards, see Sharing Dashboards.
     */
    LinkSharingConfiguration?: LinkSharingConfiguration;
  }
  export interface DescribeDashboardRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described. 
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias name.
     */
    AliasName?: AliasName;
  }
  export interface DescribeDashboardResponse {
    /**
     * Information about the dashboard.
     */
    Dashboard?: Dashboard;
    /**
     * The HTTP status of this request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeDataSetPermissionsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
  }
  export interface DescribeDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DataSetArn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId?: ResourceId;
    /**
     * A list of resource permissions on the dataset.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSetRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
  }
  export interface DescribeDataSetResponse {
    /**
     * Information on the dataset.
     */
    DataSet?: DataSet;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSourcePermissionsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId: ResourceId;
  }
  export interface DescribeDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * A list of resource permissions on the data source.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSourceRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId: ResourceId;
  }
  export interface DescribeDataSourceResponse {
    /**
     * The information on the data source.
     */
    DataSource?: DataSource;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeFolderPermissionsRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
  }
  export interface DescribeFolderPermissionsResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the folder.
     */
    Arn?: Arn;
    /**
     * Information about the permissions on the folder.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeFolderRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
  }
  export interface DescribeFolderResolvedPermissionsRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
  }
  export interface DescribeFolderResolvedPermissionsResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the folder.
     */
    Arn?: Arn;
    /**
     * Information about the permissions for the folder.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeFolderResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * Information about the folder.
     */
    Folder?: Folder;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeGroupMembershipRequest {
    /**
     * The user name of the user that you want to search for.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to search.
     */
    GroupName: GroupName;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that includes the group you are searching within.
     */
    Namespace: Namespace;
  }
  export interface DescribeGroupMembershipResponse {
    GroupMember?: GroupMember;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeGroupRequest {
    /**
     * The name of the group that you want to describe.
     */
    GroupName: GroupName;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace of the group that you want described.
     */
    Namespace: Namespace;
  }
  export interface DescribeGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeIAMPolicyAssignmentRequest {
    /**
     * The ID of the Amazon Web Services account that contains the assignment that you want to describe.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule.
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface DescribeIAMPolicyAssignmentResponse {
    /**
     * Information describing the IAM policy assignment.
     */
    IAMPolicyAssignment?: IAMPolicyAssignment;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeIngestionRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: String;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
  }
  export interface DescribeIngestionResponse {
    /**
     * Information about the ingestion.
     */
    Ingestion?: Ingestion;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeIpRestrictionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the IP rules.
     */
    AwsAccountId: AwsAccountId;
  }
  export interface DescribeIpRestrictionResponse {
    /**
     * The ID of the Amazon Web Services account that contains the IP rules.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * A map that describes the IP rules with CIDR range and description.
     */
    IpRestrictionRuleMap?: IpRestrictionRuleMap;
    /**
     * A value that specifies whether IP rules are turned on.
     */
    Enabled?: NullableBoolean;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request. 
     */
    Status?: StatusCode;
  }
  export interface DescribeNamespaceRequest {
    /**
     * The ID for the Amazon Web Services account that contains the Amazon QuickSight namespace that you want to describe.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that you want to describe.
     */
    Namespace: Namespace;
  }
  export interface DescribeNamespaceResponse {
    /**
     * The information about the namespace that you're describing. The response includes the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. DescribeNamespace also works for namespaces that are in the process of being created. For incomplete namespaces, this API operation lists the namespace error types and messages associated with the creation process.
     */
    Namespace?: NamespaceInfoV2;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeTemplateAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template alias that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName: AliasName;
  }
  export interface DescribeTemplateAliasResponse {
    /**
     * Information about the template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeTemplateDefinitionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template. You must be using the Amazon Web Services account that the template is in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the template that you're describing.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The version number of the template.
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName?: AliasName;
  }
  export interface DescribeTemplateDefinitionResponse {
    /**
     * The descriptive name of the template.
     */
    Name?: TemplateName;
    /**
     * The ID of the template described.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * Errors associated with the template version.
     */
    Errors?: TemplateErrorList;
    /**
     * Status associated with the template.    CREATION_IN_PROGRESS     CREATION_SUCCESSFUL     CREATION_FAILED     UPDATE_IN_PROGRESS     UPDATE_SUCCESSFUL     UPDATE_FAILED     DELETED   
     */
    ResourceStatus?: ResourceStatus;
    /**
     * The ARN of the theme of the template.
     */
    ThemeArn?: Arn;
    /**
     * The definition of the template. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: TemplateVersionDefinition;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeTemplatePermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
  }
  export interface DescribeTemplatePermissionsResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    TemplateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeTemplateRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * (Optional) The number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the template is described.
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName?: AliasName;
  }
  export interface DescribeTemplateResponse {
    /**
     * The template structure for the object you want to describe.
     */
    Template?: Template;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeThemeAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme alias that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The name of the theme alias that you want to describe.
     */
    AliasName: AliasName;
  }
  export interface DescribeThemeAliasResponse {
    /**
     * Information about the theme alias.
     */
    ThemeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeThemePermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme that you want to describe permissions for.
     */
    ThemeId: ShortRestrictiveResourceId;
  }
  export interface DescribeThemePermissionsResponse {
    /**
     * The ID for the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the theme.
     */
    ThemeArn?: Arn;
    /**
     * A list of resource permissions set on the theme. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeThemeRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme that you're describing.
     */
    AwsAccountId: AwsAndAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The version number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the theme is described.
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes.
     */
    AliasName?: AliasName;
  }
  export interface DescribeThemeResponse {
    /**
     * The information about the theme that you are describing.
     */
    Theme?: Theme;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeUserRequest {
    /**
     * The name of the user that you want to describe.
     */
    UserName: UserName;
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DescribeUserResponse {
    /**
     * The user name.
     */
    User?: User;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DestinationParameterValueConfiguration {
    /**
     * The configuration of custom values for destination parameter in DestinationParameterValueConfiguration.
     */
    CustomValuesConfiguration?: CustomValuesConfiguration;
    /**
     * The configuration that selects all options.
     */
    SelectAllValueOptions?: SelectAllValueOptions;
    /**
     * The source parameter name of the destination parameter.
     */
    SourceParameterName?: String;
    /**
     * The source field ID of the destination parameter.
     */
    SourceField?: FieldId;
  }
  export interface DimensionField {
    /**
     * The dimension type field with numerical type columns.
     */
    NumericalDimensionField?: NumericalDimensionField;
    /**
     * The dimension type field with categorical type columns.
     */
    CategoricalDimensionField?: CategoricalDimensionField;
    /**
     * The dimension type field with date type columns.
     */
    DateDimensionField?: DateDimensionField;
  }
  export type DimensionFieldList = DimensionField[];
  export type Domain = string;
  export interface DonutCenterOptions {
    /**
     * Determines the visibility of the label in a donut chart. In the Amazon QuickSight console, this option is called 'Show total'.
     */
    LabelVisibility?: Visibility;
  }
  export interface DonutOptions {
    /**
     * The option for define the arc of the chart shape. Valid values are as follows:    WHOLE - A pie chart    SMALL- A small-sized donut chart    MEDIUM- A medium-sized donut chart    LARGE- A large-sized donut chart  
     */
    ArcOptions?: ArcOptions;
    /**
     * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
     */
    DonutCenterOptions?: DonutCenterOptions;
  }
  export type Double = number;
  export interface DrillDownFilter {
    /**
     * The numeric equality type drill down filter. This filter is used for number type columns.
     */
    NumericEqualityFilter?: NumericEqualityDrillDownFilter;
    /**
     * The category type drill down filter. This filter is used for string type columns.
     */
    CategoryFilter?: CategoryDrillDownFilter;
    /**
     * The time range drill down filter. This filter is used for date time columns.
     */
    TimeRangeFilter?: TimeRangeDrillDownFilter;
  }
  export type DrillDownFilterList = DrillDownFilter[];
  export interface DropDownControlDisplayOptions {
    /**
     * The configuration of the Select all options in a dropdown control.
     */
    SelectAllOptions?: ListControlSelectAllOptions;
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
  }
  export interface DynamicDefaultValue {
    /**
     * The column that contains the username.
     */
    UserNameColumn?: ColumnIdentifier;
    /**
     * The column that contains the group name.
     */
    GroupNameColumn?: ColumnIdentifier;
    /**
     * The column that contains the default value of each user or group.
     */
    DefaultValueColumn: ColumnIdentifier;
  }
  export type Edition = "STANDARD"|"ENTERPRISE"|"ENTERPRISE_AND_Q"|string;
  export type EmbeddingIdentityType = "IAM"|"QUICKSIGHT"|"ANONYMOUS"|string;
  export type EmbeddingUrl = string;
  export interface EmptyVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The data set that is used in the empty visual. Every visual requires a dataset to render.
     */
    DataSetIdentifier: DataSetIdentifier;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface Entity {
    /**
     * The hierarchical path of the entity within the analysis, template, or dashboard definition tree.
     */
    Path?: NonEmptyString;
  }
  export type EntityList = Entity[];
  export type EntryPath = string;
  export type EntryPoint = string;
  export interface ErrorInfo {
    /**
     * Error type.
     */
    Type?: IngestionErrorType;
    /**
     * Error message.
     */
    Message?: String;
  }
  export interface ExasolParameters {
    /**
     * The hostname or IP address of the Exasol data source.
     */
    Host: Host;
    /**
     * The port for the Exasol data source.
     */
    Port: Port;
  }
  export interface ExcludePeriodConfiguration {
    /**
     * The amount or number of the exclude period.
     */
    Amount: Integer;
    /**
     * The granularity or unit (day, month, year) of the exclude period.
     */
    Granularity: TimeGranularity;
    /**
     * The status of the exclude period. Choose from the following options:    ENABLED     DISABLED   
     */
    Status?: WidgetStatus;
  }
  export interface ExplicitHierarchy {
    /**
     * The hierarchy ID of the explicit hierarchy.
     */
    HierarchyId: HierarchyId;
    /**
     * The list of columns that define the explicit hierarchy.
     */
    Columns: ExplicitHierarchyColumnList;
    /**
     * The option that determines the drill down filters for the explicit hierarchy.
     */
    DrillDownFilters?: DrillDownFilterList;
  }
  export type ExplicitHierarchyColumnList = ColumnIdentifier[];
  export interface ExportHiddenFieldsOption {
    /**
     * 
     */
    AvailabilityStatus?: DashboardBehavior;
  }
  export interface ExportToCSVOption {
    /**
     * Availability status.
     */
    AvailabilityStatus?: DashboardBehavior;
  }
  export type Expression = string;
  export interface FieldBasedTooltip {
    /**
     * The visibility of Show aggregations.
     */
    AggregationVisibility?: Visibility;
    /**
     * The type for the &gt;tooltip title. Choose one of the following options:    NONE: Doesn't use the primary value as the title.    PRIMARY_VALUE: Uses primary value as the title.  
     */
    TooltipTitleType?: TooltipTitleType;
    /**
     * The fields configuration in the tooltip.
     */
    TooltipFields?: TooltipItemList;
  }
  export interface FieldFolder {
    /**
     * The description for a field folder.
     */
    description?: FieldFolderDescription;
    /**
     * A folder has a list of columns. A column can only be in one folder.
     */
    columns?: FolderColumnList;
  }
  export type FieldFolderDescription = string;
  export type FieldFolderMap = {[key: string]: FieldFolder};
  export type FieldFolderPath = string;
  export type FieldId = string;
  export interface FieldLabelType {
    /**
     * Indicates the field that is targeted by the field label.
     */
    FieldId?: FieldId;
    /**
     * The visibility of the field label.
     */
    Visibility?: Visibility;
  }
  export type FieldOrderList = FieldId[];
  export interface FieldSeriesItem {
    /**
     * The field ID of the field for which you are setting the axis binding.
     */
    FieldId: FieldId;
    /**
     * The axis that you are binding the field to.
     */
    AxisBinding: AxisBinding;
    /**
     * The options that determine the presentation of line series associated to the field.
     */
    Settings?: LineChartSeriesSettings;
  }
  export interface FieldSort {
    /**
     * The sort configuration target field.
     */
    FieldId: FieldId;
    /**
     * The sort direction. Choose one of the following options:    ASC: Ascending    DESC: Descending  
     */
    Direction: SortDirection;
  }
  export interface FieldSortOptions {
    /**
     * The sort configuration for a field in a field well.
     */
    FieldSort?: FieldSort;
    /**
     * The sort configuration for a column that is not used in a field well.
     */
    ColumnSort?: ColumnSort;
  }
  export type FieldSortOptionsList = FieldSortOptions[];
  export interface FieldTooltipItem {
    /**
     * The unique ID of the field that is targeted by the tooltip.
     */
    FieldId: FieldId;
    /**
     * The label of the tooltip item.
     */
    Label?: String;
    /**
     * The visibility of the tooltip item.
     */
    Visibility?: Visibility;
  }
  export type FieldValue = string;
  export type FileFormat = "CSV"|"TSV"|"CLF"|"ELF"|"XLSX"|"JSON"|string;
  export interface FilledMapAggregatedFieldWells {
    /**
     * The aggregated location field well of the filled map. Values are grouped by location fields.
     */
    Geospatial?: FilledMapDimensionFieldList;
    /**
     * The aggregated color field well of a filled map. Values are aggregated based on location fields.
     */
    Values?: FilledMapMeasureFieldList;
  }
  export interface FilledMapConditionalFormatting {
    /**
     * Conditional formatting options of a FilledMapVisual.
     */
    ConditionalFormattingOptions: FilledMapConditionalFormattingOptionList;
  }
  export interface FilledMapConditionalFormattingOption {
    /**
     * The conditional formatting that determines the shape of the filled map.
     */
    Shape: FilledMapShapeConditionalFormatting;
  }
  export type FilledMapConditionalFormattingOptionList = FilledMapConditionalFormattingOption[];
  export interface FilledMapConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: FilledMapFieldWells;
    /**
     * The sort configuration of a FilledMapVisual.
     */
    SortConfiguration?: FilledMapSortConfiguration;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The window options of the filled map visual.
     */
    WindowOptions?: GeospatialWindowOptions;
    /**
     * The map style options of the filled map visual.
     */
    MapStyleOptions?: GeospatialMapStyleOptions;
  }
  export type FilledMapDimensionFieldList = DimensionField[];
  export interface FilledMapFieldWells {
    /**
     * The aggregated field well of the filled map.
     */
    FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
  }
  export type FilledMapMeasureFieldList = MeasureField[];
  export interface FilledMapShapeConditionalFormatting {
    /**
     * The field ID of the filled map shape.
     */
    FieldId: FieldId;
    /**
     * The conditional formatting that determines the background color of a filled map's shape.
     */
    Format?: ShapeConditionalFormat;
  }
  export interface FilledMapSortConfiguration {
    /**
     * The sort configuration of the location fields.
     */
    CategorySort?: FieldSortOptionsList;
  }
  export interface FilledMapVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: FilledMapConfiguration;
    /**
     * The conditional formatting of a FilledMapVisual.
     */
    ConditionalFormatting?: FilledMapConditionalFormatting;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface Filter {
    /**
     * A CategoryFilter filters text values. For more information, see Adding text filters in the Amazon QuickSight User Guide.
     */
    CategoryFilter?: CategoryFilter;
    /**
     * A NumericRangeFilter filters numeric values that are either inside or outside a given numeric range.
     */
    NumericRangeFilter?: NumericRangeFilter;
    /**
     * A NumericEqualityFilter filters numeric values that equal or do not equal a given numeric value.
     */
    NumericEqualityFilter?: NumericEqualityFilter;
    /**
     * A TimeEqualityFilter filters date-time values that equal or do not equal a given date/time value.
     */
    TimeEqualityFilter?: TimeEqualityFilter;
    /**
     * A TimeRangeFilter filters date-time values that are either inside or outside a given date/time range.
     */
    TimeRangeFilter?: TimeRangeFilter;
    /**
     * A RelativeDatesFilter filters date values that are relative to a given date.
     */
    RelativeDatesFilter?: RelativeDatesFilter;
    /**
     * A TopBottomFilter filters data to the top or bottom values for a given column.
     */
    TopBottomFilter?: TopBottomFilter;
  }
  export interface FilterControl {
    /**
     * A control from a date filter that is used to specify date and time.
     */
    DateTimePicker?: FilterDateTimePickerControl;
    /**
     * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
     */
    List?: FilterListControl;
    /**
     * A control to display a dropdown list with buttons that are used to select a single value.
     */
    Dropdown?: FilterDropDownControl;
    /**
     * A control to display a text box that is used to enter a single entry.
     */
    TextField?: FilterTextFieldControl;
    /**
     * A control to display a text box that is used to enter multiple entries.
     */
    TextArea?: FilterTextAreaControl;
    /**
     * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
     */
    Slider?: FilterSliderControl;
    /**
     * A control from a date filter that is used to specify the relative date.
     */
    RelativeDateTime?: FilterRelativeDateTimeControl;
  }
  export type FilterControlList = FilterControl[];
  export interface FilterDateTimePickerControl {
    /**
     * The ID of the FilterDateTimePickerControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterDateTimePickerControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterDateTimePickerControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of a control.
     */
    DisplayOptions?: DateTimePickerControlDisplayOptions;
    /**
     * The date time picker type of a FilterDateTimePickerControl. Choose one of the following options:    SINGLE_VALUED: The filter condition is a fixed date.    DATE_RANGE: The filter condition is a date time range.  
     */
    Type?: SheetControlDateTimePickerType;
  }
  export interface FilterDropDownControl {
    /**
     * The ID of the FilterDropDownControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterDropDownControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterDropDownControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of the FilterDropDownControl.
     */
    DisplayOptions?: DropDownControlDisplayOptions;
    /**
     * The type of the FilterDropDownControl. Choose one of the following options:    MULTI_SELECT: The user can select multiple entries from a dropdown menu.    SINGLE_SELECT: The user can select a single entry from a dropdown menu.  
     */
    Type?: SheetControlListType;
    /**
     * A list of selectable values that are used in a control.
     */
    SelectableValues?: FilterSelectableValues;
    /**
     * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
     */
    CascadingControlConfiguration?: CascadingControlConfiguration;
  }
  export interface FilterGroup {
    /**
     * The value that uniquely identifies a FilterGroup within a dashboard, template, or analysis.
     */
    FilterGroupId: ShortRestrictiveResourceId;
    /**
     * The list of filters that are present in a FilterGroup.
     */
    Filters: FilterList;
    /**
     * The configuration that specifies what scope to apply to a FilterGroup. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
     */
    ScopeConfiguration: FilterScopeConfiguration;
    /**
     * The status of the FilterGroup.
     */
    Status?: WidgetStatus;
    /**
     * The filter new feature which can apply filter group to all data sets. Choose one of the following options:    ALL_DATASETS     SINGLE_DATASET   
     */
    CrossDataset: CrossDatasetTypes;
  }
  export type FilterGroupList = FilterGroup[];
  export type FilterList = Filter[];
  export interface FilterListConfiguration {
    /**
     * The match operator that is used to determine if a filter should be applied.
     */
    MatchOperator: CategoryFilterMatchOperator;
    /**
     * The list of category values for the filter.
     */
    CategoryValues?: CategoryValueList;
    /**
     * Select all of the values. Null is not the assigned value of select all.    FILTER_ALL_VALUES   
     */
    SelectAllOptions?: CategoryFilterSelectAllOptions;
  }
  export interface FilterListControl {
    /**
     * The ID of the FilterListControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterListControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterListControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of a control.
     */
    DisplayOptions?: ListControlDisplayOptions;
    /**
     * The type of FilterListControl. Choose one of the following options:    MULTI_SELECT: The user can select multiple entries from the list.    SINGLE_SELECT: The user can select a single entry from the list.  
     */
    Type?: SheetControlListType;
    /**
     * A list of selectable values that are used in a control.
     */
    SelectableValues?: FilterSelectableValues;
    /**
     * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
     */
    CascadingControlConfiguration?: CascadingControlConfiguration;
  }
  export type FilterNullOption = "ALL_VALUES"|"NULLS_ONLY"|"NON_NULLS_ONLY"|string;
  export interface FilterOperation {
    /**
     * An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
     */
    ConditionExpression: Expression;
  }
  export interface FilterOperationSelectedFieldsConfiguration {
    /**
     * Chooses the fields that are filtered in CustomActionFilterOperation.
     */
    SelectedFields?: SelectedFieldList;
    /**
     * A structure that contains the options that choose which fields are filtered in the CustomActionFilterOperation. Valid values are defined as follows:    ALL_FIELDS: Applies the filter operation to all fields.  
     */
    SelectedFieldOptions?: SelectedFieldOptions;
  }
  export interface FilterOperationTargetVisualsConfiguration {
    /**
     * The configuration of the same-sheet target visuals that you want to be filtered.
     */
    SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
  }
  export type FilterOperator = "StringEquals"|"StringLike"|string;
  export interface FilterRelativeDateTimeControl {
    /**
     * The ID of the FilterTextAreaControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterTextAreaControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterTextAreaControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of a control.
     */
    DisplayOptions?: RelativeDateTimeControlDisplayOptions;
  }
  export interface FilterScopeConfiguration {
    /**
     * The configuration for applying a filter to specific sheets.
     */
    SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
  }
  export interface FilterSelectableValues {
    /**
     * The values that are used in the FilterSelectableValues.
     */
    Values?: ParameterSelectableValueList;
  }
  export interface FilterSliderControl {
    /**
     * The ID of the FilterSliderControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterSliderControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterSliderControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of a control.
     */
    DisplayOptions?: SliderControlDisplayOptions;
    /**
     * The type of FilterSliderControl. Choose one of the following options:    SINGLE_POINT: Filter against(equals) a single data point.    RANGE: Filter data that is in a specified range.  
     */
    Type?: SheetControlSliderType;
    /**
     * The smaller value that is displayed at the left of the slider.
     */
    MaximumValue: Double;
    /**
     * The larger value that is displayed at the right of the slider.
     */
    MinimumValue: Double;
    /**
     * The number of increments that the slider bar is divided into.
     */
    StepSize: Double;
  }
  export interface FilterTextAreaControl {
    /**
     * The ID of the FilterTextAreaControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterTextAreaControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterTextAreaControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The delimiter that is used to separate the lines in text.
     */
    Delimiter?: TextAreaControlDelimiter;
    /**
     * The display options of a control.
     */
    DisplayOptions?: TextAreaControlDisplayOptions;
  }
  export interface FilterTextFieldControl {
    /**
     * The ID of the FilterTextFieldControl.
     */
    FilterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the FilterTextFieldControl.
     */
    Title: SheetControlTitle;
    /**
     * The source filter ID of the FilterTextFieldControl.
     */
    SourceFilterId: ShortRestrictiveResourceId;
    /**
     * The display options of a control.
     */
    DisplayOptions?: TextFieldControlDisplayOptions;
  }
  export type FilterVisualScope = "ALL_VISUALS"|"SELECTED_VISUALS"|string;
  export type FilteredVisualsList = ShortRestrictiveResourceId[];
  export interface Folder {
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the folder.
     */
    Arn?: Arn;
    /**
     * A display name for the folder.
     */
    Name?: FolderName;
    /**
     * The type of folder it is.
     */
    FolderType?: FolderType;
    /**
     * An array of ancestor ARN strings for the folder.
     */
    FolderPath?: Path;
    /**
     * The time that the folder was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The time that the folder was last updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type FolderColumnList = String[];
  export type FolderFilterAttribute = "PARENT_FOLDER_ARN"|"DIRECT_QUICKSIGHT_OWNER"|"DIRECT_QUICKSIGHT_SOLE_OWNER"|"DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"|"QUICKSIGHT_OWNER"|"QUICKSIGHT_VIEWER_OR_OWNER"|"FOLDER_NAME"|string;
  export interface FolderMember {
    /**
     * The ID of an asset in the folder.
     */
    MemberId?: RestrictiveResourceId;
    /**
     * The type of asset that it is.
     */
    MemberType?: MemberType;
  }
  export type FolderMemberList = MemberIdArnPair[];
  export type FolderName = string;
  export interface FolderSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals". Valid values are "StringEquals" and "StringLike". If you set the operator value to "StringEquals", you need to provide an ownership related filter in the "NAME" field and the arn of the user or group whose folders you want to search in the "Value" field. For example, "Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". If you set the value to "StringLike", you need to provide the name of the folders you are searching for. For example, "Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test". The "StringLike" operator only supports the NAME value FOLDER_NAME.
     */
    Operator?: FilterOperator;
    /**
     * The name of a value that you want to use in the filter. For example, "Name": "QUICKSIGHT_OWNER". Valid values are defined as follows:    QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any folders with that ARN listed as one of the folder's owners or viewers are returned. Implicit permissions from folders or groups are considered.    QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are considered.    DIRECT_QUICKSIGHT_SOLE_OWNER: Provide an ARN of a user or group, and any folders with that ARN listed as the only owner of the folder are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_OWNER: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are not considered.    DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners or viewers of the folders are returned. Implicit permissions from folders or groups are not considered.     FOLDER_NAME: Any folders whose names have a substring match to this value will be returned.    PARENT_FOLDER_ARN: Provide an ARN of a folder, and any folders that are directly under that parent folder are returned. If you choose to use this option and leave the value blank, all root-level folders in the account are returned.   
     */
    Name?: FolderFilterAttribute;
    /**
     * The value of the named item (in this example, PARENT_FOLDER_ARN), that you want to use as a filter. For example, "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId".
     */
    Value?: String;
  }
  export type FolderSearchFilterList = FolderSearchFilter[];
  export interface FolderSummary {
    /**
     * The Amazon Resource Name (ARN) of the folder.
     */
    Arn?: Arn;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The display name of the folder.
     */
    Name?: FolderName;
    /**
     * The type of folder.
     */
    FolderType?: FolderType;
    /**
     * The time that the folder was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The time that the folder was last updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type FolderSummaryList = FolderSummary[];
  export type FolderType = "SHARED"|string;
  export interface Font {
    /**
     * Determines the font family settings.
     */
    FontFamily?: String;
  }
  export interface FontConfiguration {
    /**
     * The option that determines the text display size.
     */
    FontSize?: FontSize;
    /**
     * Determines the appearance of decorative lines on the text.
     */
    FontDecoration?: FontDecoration;
    /**
     * Determines the color of the text.
     */
    FontColor?: HexColor;
    /**
     * The option that determines the text display weight, or boldness.
     */
    FontWeight?: FontWeight;
    /**
     * Determines the text display face that is inherited by the given font family.
     */
    FontStyle?: FontStyle;
  }
  export type FontDecoration = "UNDERLINE"|"NONE"|string;
  export type FontList = Font[];
  export interface FontSize {
    /**
     * The lexical name for the text size, proportional to its surrounding context.
     */
    Relative?: RelativeFontSize;
  }
  export type FontStyle = "NORMAL"|"ITALIC"|string;
  export interface FontWeight {
    /**
     * The lexical name for the level of boldness of the text display.
     */
    Name?: FontWeightName;
  }
  export type FontWeightName = "NORMAL"|"BOLD"|string;
  export interface ForecastComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The periods forward setup of a forecast computation.
     */
    PeriodsForward?: PeriodsForward;
    /**
     * The periods backward setup of a forecast computation.
     */
    PeriodsBackward?: PeriodsBackward;
    /**
     * The upper boundary setup of a forecast computation.
     */
    UpperBoundary?: Double;
    /**
     * The lower boundary setup of a forecast computation.
     */
    LowerBoundary?: Double;
    /**
     * The prediction interval setup of a forecast computation.
     */
    PredictionInterval?: PredictionInterval;
    /**
     * The seasonality setup of a forecast computation. Choose one of the following options:    AUTOMATIC     CUSTOM: Checks the custom seasonality value.  
     */
    Seasonality?: ForecastComputationSeasonality;
    /**
     * The custom seasonality value setup of a forecast computation.
     */
    CustomSeasonalityValue?: ForecastComputationCustomSeasonalityValue;
  }
  export type ForecastComputationCustomSeasonalityValue = number;
  export type ForecastComputationSeasonality = "AUTOMATIC"|"CUSTOM"|string;
  export interface ForecastConfiguration {
    /**
     * The forecast properties setup of a forecast in the line chart.
     */
    ForecastProperties?: TimeBasedForecastProperties;
    /**
     * The forecast scenario of a forecast in the line chart.
     */
    Scenario?: ForecastScenario;
  }
  export type ForecastConfigurationList = ForecastConfiguration[];
  export interface ForecastScenario {
    /**
     * The what-if analysis forecast setup with the target date.
     */
    WhatIfPointScenario?: WhatIfPointScenario;
    /**
     * The what-if analysis forecast setup with the date range.
     */
    WhatIfRangeScenario?: WhatIfRangeScenario;
  }
  export interface FormatConfiguration {
    /**
     * Formatting configuration for string fields.
     */
    StringFormatConfiguration?: StringFormatConfiguration;
    /**
     * Formatting configuration for number fields.
     */
    NumberFormatConfiguration?: NumberFormatConfiguration;
    /**
     * Formatting configuration for DateTime fields.
     */
    DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
  }
  export interface FreeFormLayoutCanvasSizeOptions {
    /**
     * The options that determine the sizing of the canvas used in a free-form layout.
     */
    ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
  }
  export interface FreeFormLayoutConfiguration {
    /**
     * The elements that are included in a free-form layout.
     */
    Elements: FreeFromLayoutElementList;
    CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
  }
  export interface FreeFormLayoutElement {
    /**
     * A unique identifier for an element within a free-form layout.
     */
    ElementId: ShortRestrictiveResourceId;
    /**
     * The type of element.
     */
    ElementType: LayoutElementType;
    /**
     * The x-axis coordinate of the element.
     */
    XAxisLocation: PixelLength;
    /**
     * The y-axis coordinate of the element.
     */
    YAxisLocation: UnlimitedPixelLength;
    /**
     * The width of an element within a free-form layout.
     */
    Width: PixelLength;
    /**
     * The height of an element within a free-form layout.
     */
    Height: PixelLength;
    /**
     * The visibility of an element within a free-form layout.
     */
    Visibility?: Visibility;
    /**
     * The rendering rules that determine when an element should be displayed within a free-form layout.
     */
    RenderingRules?: SheetElementRenderingRuleList;
    /**
     * The border style configuration of a free-form layout element.
     */
    BorderStyle?: FreeFormLayoutElementBorderStyle;
    /**
     * The border style configuration of a free-form layout element. This border style is used when the element is selected.
     */
    SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;
    /**
     * The background style configuration of a free-form layout element.
     */
    BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;
    /**
     * The loading animation configuration of a free-form layout element.
     */
    LoadingAnimation?: LoadingAnimation;
  }
  export interface FreeFormLayoutElementBackgroundStyle {
    /**
     * The background visibility of a free-form layout element.
     */
    Visibility?: Visibility;
    /**
     * The background color of a free-form layout element.
     */
    Color?: HexColorWithTransparency;
  }
  export interface FreeFormLayoutElementBorderStyle {
    /**
     * The border visibility of a free-form layout element.
     */
    Visibility?: Visibility;
    /**
     * The border color of a free-form layout element.
     */
    Color?: HexColorWithTransparency;
  }
  export interface FreeFormLayoutScreenCanvasSizeOptions {
    /**
     * The width that the view port will be optimized for when the layout renders.
     */
    OptimizedViewPortWidth: PixelLength;
  }
  export interface FreeFormSectionLayoutConfiguration {
    /**
     * The elements that are included in the free-form layout.
     */
    Elements: FreeFromLayoutElementList;
  }
  export type FreeFromLayoutElementList = FreeFormLayoutElement[];
  export interface FunnelChartAggregatedFieldWells {
    /**
     * The category field wells of a funnel chart. Values are grouped by category fields.
     */
    Category?: FunnelChartDimensionFieldList;
    /**
     * The value field wells of a funnel chart. Values are aggregated based on categories.
     */
    Values?: FunnelChartMeasureFieldList;
  }
  export interface FunnelChartConfiguration {
    /**
     * The field well configuration of a FunnelChartVisual.
     */
    FieldWells?: FunnelChartFieldWells;
    /**
     * The sort configuration of a FunnelChartVisual.
     */
    SortConfiguration?: FunnelChartSortConfiguration;
    /**
     * The label options of the categories that are displayed in a FunnelChartVisual.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options for the values that are displayed in a FunnelChartVisual.
     */
    ValueLabelOptions?: ChartAxisLabelOptions;
    /**
     * The tooltip configuration of a FunnelChartVisual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The options that determine the presentation of the data labels.
     */
    DataLabelOptions?: FunnelChartDataLabelOptions;
    /**
     * The visual palette configuration of a FunnelChartVisual.
     */
    VisualPalette?: VisualPalette;
  }
  export interface FunnelChartDataLabelOptions {
    /**
     * The visibility option that determines if data labels are displayed.
     */
    Visibility?: Visibility;
    /**
     * The visibility of the category labels within the data labels.
     */
    CategoryLabelVisibility?: Visibility;
    /**
     * The visibility of the measure labels within the data labels.
     */
    MeasureLabelVisibility?: Visibility;
    /**
     * Determines the positioning of the data label relative to a section of the funnel.
     */
    Position?: DataLabelPosition;
    /**
     * The font configuration for the data labels. Only the FontSize attribute of the font configuration is used for data labels.
     */
    LabelFontConfiguration?: FontConfiguration;
    /**
     * The color of the data label text.
     */
    LabelColor?: HexColor;
    /**
     * Determines the style of the metric labels.
     */
    MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle;
  }
  export type FunnelChartDimensionFieldList = DimensionField[];
  export interface FunnelChartFieldWells {
    /**
     * The field well configuration of a FunnelChartVisual.
     */
    FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
  }
  export type FunnelChartMeasureDataLabelStyle = "VALUE_ONLY"|"PERCENTAGE_BY_FIRST_STAGE"|"PERCENTAGE_BY_PREVIOUS_STAGE"|"VALUE_AND_PERCENTAGE_BY_FIRST_STAGE"|"VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE"|string;
  export type FunnelChartMeasureFieldList = MeasureField[];
  export interface FunnelChartSortConfiguration {
    /**
     * The sort configuration of the category fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The limit on the number of categories displayed.
     */
    CategoryItemsLimit?: ItemsLimitConfiguration;
  }
  export interface FunnelChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a FunnelChartVisual.
     */
    ChartConfiguration?: FunnelChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface GaugeChartArcConditionalFormatting {
    /**
     * The conditional formatting of the arc foreground color.
     */
    ForegroundColor?: ConditionalFormattingColor;
  }
  export interface GaugeChartConditionalFormatting {
    /**
     * Conditional formatting options of a GaugeChartVisual.
     */
    ConditionalFormattingOptions?: GaugeChartConditionalFormattingOptionList;
  }
  export interface GaugeChartConditionalFormattingOption {
    /**
     * The conditional formatting for the primary value of a GaugeChartVisual.
     */
    PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;
    /**
     * The options that determine the presentation of the arc of a GaugeChartVisual.
     */
    Arc?: GaugeChartArcConditionalFormatting;
  }
  export type GaugeChartConditionalFormattingOptionList = GaugeChartConditionalFormattingOption[];
  export interface GaugeChartConfiguration {
    /**
     * The field well configuration of a GaugeChartVisual.
     */
    FieldWells?: GaugeChartFieldWells;
    /**
     * The options that determine the presentation of the GaugeChartVisual.
     */
    GaugeChartOptions?: GaugeChartOptions;
    /**
     * The data label configuration of a GaugeChartVisual.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip configuration of a GaugeChartVisual.
     */
    TooltipOptions?: TooltipOptions;
    /**
     * The visual palette configuration of a GaugeChartVisual.
     */
    VisualPalette?: VisualPalette;
  }
  export interface GaugeChartFieldWells {
    /**
     * The value field wells of a GaugeChartVisual.
     */
    Values?: MeasureFieldList;
    /**
     * The target value field wells of a GaugeChartVisual.
     */
    TargetValues?: MeasureFieldList;
  }
  export interface GaugeChartOptions {
    /**
     * The options that determine the primary value display type.
     */
    PrimaryValueDisplayType?: PrimaryValueDisplayType;
    /**
     * The comparison configuration of a GaugeChartVisual.
     */
    Comparison?: ComparisonConfiguration;
    /**
     * The arc axis configuration of a GaugeChartVisual.
     */
    ArcAxis?: ArcAxisConfiguration;
    /**
     * The arc configuration of a GaugeChartVisual.
     */
    Arc?: ArcConfiguration;
    /**
     * The options that determine the primary value font configuration.
     */
    PrimaryValueFontConfiguration?: FontConfiguration;
  }
  export interface GaugeChartPrimaryValueConditionalFormatting {
    /**
     * The conditional formatting of the primary value text color.
     */
    TextColor?: ConditionalFormattingColor;
    /**
     * The conditional formatting of the primary value icon.
     */
    Icon?: ConditionalFormattingIcon;
  }
  export interface GaugeChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a GaugeChartVisual.
     */
    ChartConfiguration?: GaugeChartConfiguration;
    /**
     * The conditional formatting of a GaugeChartVisual.
     */
    ConditionalFormatting?: GaugeChartConditionalFormatting;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface GenerateEmbedUrlForAnonymousUserRequest {
    /**
     * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
     */
    AwsAccountId: AwsAccountId;
    /**
     * How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to default.
     */
    Namespace: Namespace;
    /**
     * The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the DataSet$RowLevelPermissionTagConfiguration parameter so that session tags can be used to provide row-level security. These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see Using Row-Level Security (RLS) with Tagsin the Amazon QuickSight User Guide.
     */
    SessionTags?: SessionTagList;
    /**
     * The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user is authorized to access during the lifetime of the session. If you choose Dashboard embedding experience, pass the list of dashboard ARNs in the account that you want the user to be able to view. Currently, you can pass up to 25 dashboard ARNs in each API call.
     */
    AuthorizedResourceArns: ArnList;
    /**
     * The configuration of the experience that you are embedding.
     */
    ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration;
    /**
     * The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call. To include all subdomains under a specific domain to the allow list, use *. For example, https://*.sapp.amazon.com includes all subdomains under https://sapp.amazon.com.
     */
    AllowedDomains?: StringList;
  }
  export interface GenerateEmbedUrlForAnonymousUserResponse {
    /**
     * The embed URL for the dashboard.
     */
    EmbedUrl: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     */
    Status: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId: String;
    /**
     * The Amazon Resource Name (ARN) to use for the anonymous Amazon QuickSight user.
     */
    AnonymousUserArn: Arn;
  }
  export interface GenerateEmbedUrlForRegisteredUserRequest {
    /**
     * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
     */
    AwsAccountId: AwsAccountId;
    /**
     * How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * The Amazon Resource Name for the registered user.
     */
    UserArn: Arn;
    /**
     * The experience you are embedding. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, or the entire Amazon QuickSight console.
     */
    ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration;
    /**
     * The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call. To include all subdomains under a specific domain to the allow list, use *. For example, https://*.sapp.amazon.com includes all subdomains under https://sapp.amazon.com.
     */
    AllowedDomains?: StringList;
  }
  export interface GenerateEmbedUrlForRegisteredUserResponse {
    /**
     * The embed URL for the Amazon QuickSight dashboard, visual, Q search bar, or console.
     */
    EmbedUrl: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     */
    Status: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId: String;
  }
  export interface GeoSpatialColumnGroup {
    /**
     * A display name for the hierarchy.
     */
    Name: ColumnGroupName;
    /**
     * Country code.
     */
    CountryCode?: GeoSpatialCountryCode;
    /**
     * Columns in this hierarchy.
     */
    Columns: ColumnList;
  }
  export type GeoSpatialCountryCode = "US"|string;
  export type GeoSpatialDataRole = "COUNTRY"|"STATE"|"COUNTY"|"CITY"|"POSTCODE"|"LONGITUDE"|"LATITUDE"|string;
  export interface GeospatialCoordinateBounds {
    /**
     * The latitude of the north bound of the geospatial coordinate bounds.
     */
    North: Latitude;
    /**
     * The latitude of the south bound of the geospatial coordinate bounds.
     */
    South: Latitude;
    /**
     * The longitude of the west bound of the geospatial coordinate bounds.
     */
    West: Longitude;
    /**
     * The longitude of the east bound of the geospatial coordinate bounds.
     */
    East: Longitude;
  }
  export interface GeospatialMapAggregatedFieldWells {
    /**
     * The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.
     */
    Geospatial?: DimensionFieldList;
    /**
     * The size field wells of a geospatial map. Values are aggregated based on geospatial fields.
     */
    Values?: MeasureFieldList;
    /**
     * The color field wells of a geospatial map.
     */
    Colors?: DimensionFieldList;
  }
  export interface GeospatialMapConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: GeospatialMapFieldWells;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The window options of the geospatial map.
     */
    WindowOptions?: GeospatialWindowOptions;
    /**
     * The map style options of the geospatial map.
     */
    MapStyleOptions?: GeospatialMapStyleOptions;
    /**
     * The point style options of the geospatial map.
     */
    PointStyleOptions?: GeospatialPointStyleOptions;
    VisualPalette?: VisualPalette;
  }
  export interface GeospatialMapFieldWells {
    /**
     * The aggregated field well for a geospatial map.
     */
    GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
  }
  export interface GeospatialMapStyleOptions {
    /**
     * The base map style of the geospatial map.
     */
    BaseMapStyle?: BaseMapStyleType;
  }
  export interface GeospatialMapVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: GeospatialMapConfiguration;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface GeospatialPointStyleOptions {
    /**
     * The selected point styles (point, cluster) of the geospatial map.
     */
    SelectedPointStyle?: GeospatialSelectedPointStyle;
    /**
     * The cluster marker configuration of the geospatial point style.
     */
    ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
  }
  export type GeospatialSelectedPointStyle = "POINT"|"CLUSTER"|string;
  export interface GeospatialWindowOptions {
    /**
     * The bounds options (north, south, west, east) of the geospatial window options.
     */
    Bounds?: GeospatialCoordinateBounds;
    /**
     * The map zoom modes (manual, auto) of the geospatial window options.
     */
    MapZoomMode?: MapZoomMode;
  }
  export interface GetDashboardEmbedUrlRequest {
    /**
     * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the Identity and Access Management (IAM) policy.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The authentication method that the user uses to sign in.
     */
    IdentityType: EmbeddingIdentityType;
    /**
     * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.
     */
    UndoRedoDisabled?: Boolean;
    /**
     * Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.
     */
    ResetDisabled?: Boolean;
    /**
     * Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.
     */
    StatePersistenceEnabled?: Boolean;
    /**
     * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.   Omit this parameter for users in the third group – IAM users and IAM role-based sessions.
     */
    UserArn?: Arn;
    /**
     * The Amazon QuickSight namespace that contains the dashboard IDs in this request. If you're not using a custom namespace, set Namespace = default.
     */
    Namespace?: Namespace;
    /**
     * A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the IdentityType parameter must be set to ANONYMOUS because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards.
     */
    AdditionalDashboardIds?: AdditionalDashboardIdList;
  }
  export interface GetDashboardEmbedUrlResponse {
    /**
     * A single-use URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours. 
     */
    EmbedUrl?: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface GetSessionEmbedUrlRequest {
    /**
     * The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The URL you use to access the embedded session. The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId  - where DashboardId is the actual ID key from the Amazon QuickSight console URL of the dashboard    /analyses/AnalysisId  - where AnalysisId is the actual ID key from the Amazon QuickSight console URL of the analysis  
     */
    EntryPoint?: EntryPoint;
    /**
     * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any type of Amazon QuickSight users in your account (readers, authors, or admins). They need to be authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   Identity and Access Management (IAM) users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation   Omit this parameter for users in the third group, IAM users and IAM role-based sessions.
     */
    UserArn?: Arn;
  }
  export interface GetSessionEmbedUrlResponse {
    /**
     * A single-use URL that you can put into your server-side web page to embed your Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours. 
     */
    EmbedUrl?: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface GlobalTableBorderOptions {
    /**
     * Determines the options for uniform border.
     */
    UniformBorder?: TableBorderOptions;
    /**
     * Determines the options for side specific border.
     */
    SideSpecificBorder?: TableSideBorderOptions;
  }
  export interface GradientColor {
    /**
     * The list of gradient color stops.
     */
    Stops?: GradientStopList;
  }
  export interface GradientStop {
    /**
     * Determines gradient offset value.
     */
    GradientOffset: Double;
    /**
     * Determines the data value.
     */
    DataValue?: Double;
    /**
     * Determines the color.
     */
    Color?: HexColor;
  }
  export type GradientStopList = GradientStop[];
  export interface GridLayoutCanvasSizeOptions {
    /**
     * The options that determine the sizing of the canvas used in a grid layout.
     */
    ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
  }
  export interface GridLayoutConfiguration {
    /**
     * The elements that are included in a grid layout.
     */
    Elements: GridLayoutElementList;
    CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
  }
  export interface GridLayoutElement {
    /**
     * A unique identifier for an element within a grid layout.
     */
    ElementId: ShortRestrictiveResourceId;
    /**
     * The type of element.
     */
    ElementType: LayoutElementType;
    /**
     * The column index for the upper left corner of an element.
     */
    ColumnIndex?: GridLayoutElementColumnIndex;
    /**
     * The width of a grid element expressed as a number of grid columns.
     */
    ColumnSpan: GridLayoutElementColumnSpan;
    /**
     * The row index for the upper left corner of an element.
     */
    RowIndex?: GridLayoutElementRowIndex;
    /**
     * The height of a grid element expressed as a number of grid rows.
     */
    RowSpan: GridLayoutElementRowSpan;
  }
  export type GridLayoutElementColumnIndex = number;
  export type GridLayoutElementColumnSpan = number;
  export type GridLayoutElementList = GridLayoutElement[];
  export type GridLayoutElementRowIndex = number;
  export type GridLayoutElementRowSpan = number;
  export interface GridLayoutScreenCanvasSizeOptions {
    /**
     * This value determines the layout behavior when the viewport is resized.    FIXED: A fixed width will be used when optimizing the layout. In the Amazon QuickSight console, this option is called Classic.    RESPONSIVE: The width of the canvas will be responsive and optimized to the view port. In the Amazon QuickSight console, this option is called Tiled.  
     */
    ResizeOption: ResizeOption;
    /**
     * The width that the view port will be optimized for when the layout renders.
     */
    OptimizedViewPortWidth?: PixelLength;
  }
  export interface Group {
    /**
     * The Amazon Resource Name (ARN) for the group.
     */
    Arn?: Arn;
    /**
     * The name of the group.
     */
    GroupName?: GroupName;
    /**
     * The group description.
     */
    Description?: GroupDescription;
    /**
     * The principal ID of the group.
     */
    PrincipalId?: String;
  }
  export type GroupDescription = string;
  export type GroupFilterAttribute = "GROUP_NAME"|string;
  export type GroupFilterOperator = "StartsWith"|string;
  export type GroupList = Group[];
  export interface GroupMember {
    /**
     * The Amazon Resource Name (ARN) for the group member (user).
     */
    Arn?: Arn;
    /**
     * The name of the group member (user).
     */
    MemberName?: GroupMemberName;
  }
  export type GroupMemberList = GroupMember[];
  export type GroupMemberName = string;
  export type GroupName = string;
  export interface GroupSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StartsWith". Currently, the only supported operator is StartsWith.
     */
    Operator: GroupFilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example "Name": "GROUP_NAME". Currently, the only supported name is GROUP_NAME.
     */
    Name: GroupFilterAttribute;
    /**
     * The value of the named item, in this case GROUP_NAME, that you want to use as a filter.
     */
    Value: String;
  }
  export type GroupSearchFilterList = GroupSearchFilter[];
  export type GroupsList = String[];
  export interface GrowthRateComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The period size setup of a growth rate computation.
     */
    PeriodSize?: GrowthRatePeriodSize;
  }
  export type GrowthRatePeriodSize = number;
  export interface GutterStyle {
    /**
     * This Boolean value controls whether to display a gutter space between sheet tiles. 
     */
    Show?: Boolean;
  }
  export interface HeaderFooterSectionConfiguration {
    /**
     * The unique identifier of the header or footer section.
     */
    SectionId: ShortRestrictiveResourceId;
    /**
     * The layout configuration of the header or footer section.
     */
    Layout: SectionLayoutConfiguration;
    /**
     * The style options of a header or footer section.
     */
    Style?: SectionStyle;
  }
  export type HeaderFooterSectionConfigurationList = HeaderFooterSectionConfiguration[];
  export interface HeatMapAggregatedFieldWells {
    /**
     * The rows field well of a heat map.
     */
    Rows?: HeatMapDimensionFieldList;
    /**
     * The columns field well of a heat map.
     */
    Columns?: HeatMapDimensionFieldList;
    /**
     * The values field well of a heat map.
     */
    Values?: HeatMapMeasureFieldList;
  }
  export interface HeatMapConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: HeatMapFieldWells;
    /**
     * The sort configuration of a heat map.
     */
    SortConfiguration?: HeatMapSortConfiguration;
    /**
     * The label options of the row that is displayed in a heat map.
     */
    RowLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options of the column that is displayed in a heat map.
     */
    ColumnLabelOptions?: ChartAxisLabelOptions;
    /**
     * The color options (gradient color, point of divergence) in a heat map.
     */
    ColorScale?: ColorScale;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
  }
  export type HeatMapDimensionFieldList = DimensionField[];
  export interface HeatMapFieldWells {
    /**
     * The aggregated field wells of a heat map.
     */
    HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
  }
  export type HeatMapMeasureFieldList = MeasureField[];
  export interface HeatMapSortConfiguration {
    /**
     * The field sort configuration of the rows fields.
     */
    HeatMapRowSort?: FieldSortOptionsList;
    /**
     * The column sort configuration for heat map for columns that aren't a part of a field well.
     */
    HeatMapColumnSort?: FieldSortOptionsList;
    /**
     * The limit on the number of rows that are displayed in a heat map.
     */
    HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;
    /**
     * The limit on the number of columns that are displayed in a heat map.
     */
    HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
  }
  export interface HeatMapVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a heat map.
     */
    ChartConfiguration?: HeatMapConfiguration;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export type HexColor = string;
  export type HexColorWithTransparency = string;
  export type HierarchyId = string;
  export interface HistogramAggregatedFieldWells {
    /**
     * The value field wells of a histogram. Values are aggregated by COUNT or DISTINCT_COUNT.
     */
    Values?: HistogramMeasureFieldList;
  }
  export interface HistogramBinOptions {
    /**
     * The options that determine the selected bin type.
     */
    SelectedBinType?: HistogramBinType;
    /**
     * The options that determine the bin count of a histogram.
     */
    BinCount?: BinCountOptions;
    /**
     * The options that determine the bin width of a histogram.
     */
    BinWidth?: BinWidthOptions;
    /**
     * The options that determine the bin start value.
     */
    StartValue?: Double;
  }
  export type HistogramBinType = "BIN_COUNT"|"BIN_WIDTH"|string;
  export interface HistogramConfiguration {
    /**
     * The field well configuration of a histogram.
     */
    FieldWells?: HistogramFieldWells;
    /**
     * The options that determine the presentation of the x-axis.
     */
    XAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The options that determine the presentation of the x-axis label.
     */
    XAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The options that determine the presentation of the y-axis.
     */
    YAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The options that determine the presentation of histogram bins.
     */
    BinOptions?: HistogramBinOptions;
    /**
     * The data label configuration of a histogram.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip configuration of a histogram.
     */
    Tooltip?: TooltipOptions;
    /**
     * The visual palette configuration of a histogram.
     */
    VisualPalette?: VisualPalette;
  }
  export interface HistogramFieldWells {
    /**
     * The field well configuration of a histogram.
     */
    HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
  }
  export type HistogramMeasureFieldList = MeasureField[];
  export interface HistogramVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration for a HistogramVisual.
     */
    ChartConfiguration?: HistogramConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export type HorizontalTextAlignment = "LEFT"|"CENTER"|"RIGHT"|"AUTO"|string;
  export type Host = string;
  export interface IAMPolicyAssignment {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * Assignment ID.
     */
    AssignmentId?: String;
    /**
     * Assignment name.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) for the IAM policy.
     */
    PolicyArn?: Arn;
    /**
     * Identities.
     */
    Identities?: IdentityMap;
    /**
     * Assignment status.
     */
    AssignmentStatus?: AssignmentStatus;
  }
  export type IAMPolicyAssignmentName = string;
  export interface IAMPolicyAssignmentSummary {
    /**
     * Assignment name.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * Assignment status.
     */
    AssignmentStatus?: AssignmentStatus;
  }
  export type IAMPolicyAssignmentSummaryList = IAMPolicyAssignmentSummary[];
  export type Icon = "CARET_UP"|"CARET_DOWN"|"PLUS"|"MINUS"|"ARROW_UP"|"ARROW_DOWN"|"ARROW_LEFT"|"ARROW_UP_LEFT"|"ARROW_DOWN_LEFT"|"ARROW_RIGHT"|"ARROW_UP_RIGHT"|"ARROW_DOWN_RIGHT"|"FACE_UP"|"FACE_DOWN"|"FACE_FLAT"|"ONE_BAR"|"TWO_BAR"|"THREE_BAR"|"CIRCLE"|"TRIANGLE"|"SQUARE"|"FLAG"|"THUMBS_UP"|"THUMBS_DOWN"|"CHECKMARK"|"X"|string;
  export type IdentityMap = {[key: string]: IdentityNameList};
  export type IdentityName = string;
  export type IdentityNameList = IdentityName[];
  export type IdentityStore = "QUICKSIGHT"|string;
  export type IdentityType = "IAM"|"QUICKSIGHT"|string;
  export interface Ingestion {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
    /**
     * Ingestion ID.
     */
    IngestionId?: IngestionId;
    /**
     * Ingestion status.
     */
    IngestionStatus: IngestionStatus;
    /**
     * Error information for this ingestion.
     */
    ErrorInfo?: ErrorInfo;
    RowInfo?: RowInfo;
    QueueInfo?: QueueInfo;
    /**
     * The time that this ingestion started.
     */
    CreatedTime: Timestamp;
    /**
     * The time that this ingestion took, measured in seconds.
     */
    IngestionTimeInSeconds?: Long;
    /**
     * The size of the data ingested, in bytes.
     */
    IngestionSizeInBytes?: Long;
    /**
     * Event source for this ingestion.
     */
    RequestSource?: IngestionRequestSource;
    /**
     * Type of this ingestion.
     */
    RequestType?: IngestionRequestType;
  }
  export type IngestionErrorType = "FAILURE_TO_ASSUME_ROLE"|"INGESTION_SUPERSEDED"|"INGESTION_CANCELED"|"DATA_SET_DELETED"|"DATA_SET_NOT_SPICE"|"S3_UPLOADED_FILE_DELETED"|"S3_MANIFEST_ERROR"|"DATA_TOLERANCE_EXCEPTION"|"SPICE_TABLE_NOT_FOUND"|"DATA_SET_SIZE_LIMIT_EXCEEDED"|"ROW_SIZE_LIMIT_EXCEEDED"|"ACCOUNT_CAPACITY_LIMIT_EXCEEDED"|"CUSTOMER_ERROR"|"DATA_SOURCE_NOT_FOUND"|"IAM_ROLE_NOT_AVAILABLE"|"CONNECTION_FAILURE"|"SQL_TABLE_NOT_FOUND"|"PERMISSION_DENIED"|"SSL_CERTIFICATE_VALIDATION_FAILURE"|"OAUTH_TOKEN_FAILURE"|"SOURCE_API_LIMIT_EXCEEDED_FAILURE"|"PASSWORD_AUTHENTICATION_FAILURE"|"SQL_SCHEMA_MISMATCH_ERROR"|"INVALID_DATE_FORMAT"|"INVALID_DATAPREP_SYNTAX"|"SOURCE_RESOURCE_LIMIT_EXCEEDED"|"SQL_INVALID_PARAMETER_VALUE"|"QUERY_TIMEOUT"|"SQL_NUMERIC_OVERFLOW"|"UNRESOLVABLE_HOST"|"UNROUTABLE_HOST"|"SQL_EXCEPTION"|"S3_FILE_INACCESSIBLE"|"IOT_FILE_NOT_FOUND"|"IOT_DATA_SET_FILE_EMPTY"|"INVALID_DATA_SOURCE_CONFIG"|"DATA_SOURCE_AUTH_FAILED"|"DATA_SOURCE_CONNECTION_FAILED"|"FAILURE_TO_PROCESS_JSON_FILE"|"INTERNAL_SERVICE_ERROR"|"REFRESH_SUPPRESSED_BY_EDIT"|"PERMISSION_NOT_FOUND"|"ELASTICSEARCH_CURSOR_NOT_ENABLED"|"CURSOR_NOT_ENABLED"|string;
  export type IngestionId = string;
  export type IngestionMaxResults = number;
  export type IngestionRequestSource = "MANUAL"|"SCHEDULED"|string;
  export type IngestionRequestType = "INITIAL_INGESTION"|"EDIT"|"INCREMENTAL_REFRESH"|"FULL_REFRESH"|string;
  export type IngestionStatus = "INITIALIZED"|"QUEUED"|"RUNNING"|"FAILED"|"COMPLETED"|"CANCELLED"|string;
  export type IngestionType = "INCREMENTAL_REFRESH"|"FULL_REFRESH"|string;
  export type Ingestions = Ingestion[];
  export interface InputColumn {
    /**
     * The name of this column in the underlying data source.
     */
    Name: ColumnName;
    /**
     * The data type of the column.
     */
    Type: InputColumnDataType;
  }
  export type InputColumnDataType = "STRING"|"INTEGER"|"DECIMAL"|"DATETIME"|"BIT"|"BOOLEAN"|"JSON"|string;
  export type InputColumnList = InputColumn[];
  export interface InsightConfiguration {
    /**
     * The computations configurations of the insight visual
     */
    Computations?: ComputationList;
    /**
     * The custom narrative of the insight visual.
     */
    CustomNarrative?: CustomNarrativeOptions;
  }
  export interface InsightVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of an insight visual.
     */
    InsightConfiguration?: InsightConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The dataset that is used in the insight visual.
     */
    DataSetIdentifier: DataSetIdentifier;
  }
  export type InstanceId = string;
  export type Integer = number;
  export type IntegerDefaultValueList = SensitiveLongObject[];
  export interface IntegerDefaultValues {
    /**
     * The dynamic value of the IntegerDefaultValues. Different defaults are displayed according to users, groups, and values mapping.
     */
    DynamicValue?: DynamicDefaultValue;
    /**
     * The static values of the IntegerDefaultValues.
     */
    StaticValues?: IntegerDefaultValueList;
  }
  export interface IntegerParameter {
    /**
     * The name of the integer parameter.
     */
    Name: NonEmptyString;
    /**
     * The values for the integer parameter.
     */
    Values: SensitiveLongList;
  }
  export interface IntegerParameterDeclaration {
    /**
     * The value type determines whether the parameter is a single-value or multi-value parameter.
     */
    ParameterValueType: ParameterValueType;
    /**
     * The name of the parameter that is being declared.
     */
    Name: ParameterName;
    /**
     * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
     */
    DefaultValues?: IntegerDefaultValues;
    /**
     * A parameter declaration for the Integer data type.
     */
    ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;
  }
  export type IntegerParameterList = IntegerParameter[];
  export interface IntegerValueWhenUnsetConfiguration {
    /**
     * The built-in options for default values. The value can be one of the following:    RECOMMENDED: The recommended value.    NULL: The NULL value.  
     */
    ValueWhenUnsetOption?: ValueWhenUnsetOption;
    /**
     * A custom value that's used when the value of a parameter isn't set.
     */
    CustomValue?: SensitiveLong;
  }
  export type IpRestrictionRuleDescription = string;
  export type IpRestrictionRuleMap = {[key: string]: IpRestrictionRuleDescription};
  export interface ItemsLimitConfiguration {
    /**
     * The limit on how many items of a field are showed in the chart. For example, the number of slices that are displayed in a pie chart.
     */
    ItemsLimit?: Long;
    /**
     * The Show other of an axis in the chart. Choose one of the following options:    INCLUDE     EXCLUDE   
     */
    OtherCategories?: OtherCategories;
  }
  export interface JiraParameters {
    /**
     * The base URL of the Jira site.
     */
    SiteBaseUrl: SiteBaseUrl;
  }
  export interface JoinInstruction {
    /**
     * The operand on the left side of a join.
     */
    LeftOperand: LogicalTableId;
    /**
     * The operand on the right side of a join.
     */
    RightOperand: LogicalTableId;
    /**
     * Join key properties of the left operand.
     */
    LeftJoinKeyProperties?: JoinKeyProperties;
    /**
     * Join key properties of the right operand.
     */
    RightJoinKeyProperties?: JoinKeyProperties;
    /**
     * The type of join that it is.
     */
    Type: JoinType;
    /**
     * The join instructions provided in the ON clause of a join.
     */
    OnClause: OnClause;
  }
  export interface JoinKeyProperties {
    /**
     * A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance.
     */
    UniqueKey?: Boolean;
  }
  export type JoinType = "INNER"|"OUTER"|"LEFT"|"RIGHT"|string;
  export interface KPIConditionalFormatting {
    /**
     * The conditional formatting options of a KPI visual.
     */
    ConditionalFormattingOptions?: KPIConditionalFormattingOptionList;
  }
  export interface KPIConditionalFormattingOption {
    /**
     * The conditional formatting for the primary value of a KPI visual.
     */
    PrimaryValue?: KPIPrimaryValueConditionalFormatting;
    /**
     * The conditional formatting for the progress bar of a KPI visual.
     */
    ProgressBar?: KPIProgressBarConditionalFormatting;
  }
  export type KPIConditionalFormattingOptionList = KPIConditionalFormattingOption[];
  export interface KPIConfiguration {
    /**
     * The field well configuration of a KPI visual.
     */
    FieldWells?: KPIFieldWells;
    /**
     * The sort configuration of a KPI visual.
     */
    SortConfiguration?: KPISortConfiguration;
    /**
     * The options that determine the presentation of a KPI visual.
     */
    KPIOptions?: KPIOptions;
  }
  export interface KPIFieldWells {
    /**
     * The value field wells of a KPI visual.
     */
    Values?: MeasureFieldList;
    /**
     * The target value field wells of a KPI visual.
     */
    TargetValues?: MeasureFieldList;
    /**
     * The trend group field wells of a KPI visual.
     */
    TrendGroups?: DimensionFieldList;
  }
  export interface KPIOptions {
    /**
     * The options that determine the presentation of the progress bar of a KPI visual.
     */
    ProgressBar?: ProgressBarOptions;
    /**
     * The options that determine the presentation of trend arrows in a KPI visual.
     */
    TrendArrows?: TrendArrowOptions;
    /**
     * The options that determine the presentation of the secondary value of a KPI visual.
     */
    SecondaryValue?: SecondaryValueOptions;
    /**
     * The comparison configuration of a KPI visual.
     */
    Comparison?: ComparisonConfiguration;
    /**
     * The options that determine the primary value display type.
     */
    PrimaryValueDisplayType?: PrimaryValueDisplayType;
    /**
     * The options that determine the primary value font configuration.
     */
    PrimaryValueFontConfiguration?: FontConfiguration;
    /**
     * The options that determine the secondary value font configuration.
     */
    SecondaryValueFontConfiguration?: FontConfiguration;
  }
  export interface KPIPrimaryValueConditionalFormatting {
    /**
     * The conditional formatting of the primary value's text color.
     */
    TextColor?: ConditionalFormattingColor;
    /**
     * The conditional formatting of the primary value's icon.
     */
    Icon?: ConditionalFormattingIcon;
  }
  export interface KPIProgressBarConditionalFormatting {
    /**
     * The conditional formatting of the progress bar's foreground color.
     */
    ForegroundColor?: ConditionalFormattingColor;
  }
  export interface KPISortConfiguration {
    /**
     * The sort configuration of the trend group fields.
     */
    TrendGroupSort?: FieldSortOptionsList;
  }
  export interface KPIVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a KPI visual.
     */
    ChartConfiguration?: KPIConfiguration;
    /**
     * The conditional formatting of a KPI visual.
     */
    ConditionalFormatting?: KPIConditionalFormatting;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface LabelOptions {
    /**
     * Determines whether or not the label is visible.
     */
    Visibility?: Visibility;
    /**
     * The font configuration of the label.
     */
    FontConfiguration?: FontConfiguration;
    /**
     * The text for the label.
     */
    CustomLabel?: String;
  }
  export type Latitude = number;
  export interface Layout {
    /**
     * The configuration that determines what the type of layout for a sheet.
     */
    Configuration: LayoutConfiguration;
  }
  export interface LayoutConfiguration {
    /**
     * A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: FIXED or RESPONSIVE.
     */
    GridLayout?: GridLayoutConfiguration;
    /**
     * A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.
     */
    FreeFormLayout?: FreeFormLayoutConfiguration;
    /**
     * A section based layout organizes visuals into multiple sections and has customized header, footer and page break.
     */
    SectionBasedLayout?: SectionBasedLayoutConfiguration;
  }
  export type LayoutElementType = "VISUAL"|"FILTER_CONTROL"|"PARAMETER_CONTROL"|"TEXT_BOX"|string;
  export type LayoutList = Layout[];
  export interface LegendOptions {
    /**
     * Determines whether or not the legend is visible.
     */
    Visibility?: Visibility;
    /**
     * The custom title for the legend.
     */
    Title?: LabelOptions;
    /**
     * The positions for the legend. Choose one of the following options:    AUTO     RIGHT     BOTTOM     LEFT   
     */
    Position?: LegendPosition;
    /**
     * The width of the legend. If this value is omitted, a default width is used when rendering.
     */
    Width?: PixelLength;
    /**
     * The height of the legend. If this value is omitted, a default height is used when rendering.
     */
    Height?: PixelLength;
  }
  export type LegendPosition = "AUTO"|"RIGHT"|"BOTTOM"|"TOP"|string;
  export type Length = string;
  export interface LineChartAggregatedFieldWells {
    /**
     * The category field wells of a line chart. Values are grouped by category fields.
     */
    Category?: DimensionFieldList;
    /**
     * The value field wells of a line chart. Values are aggregated based on categories.
     */
    Values?: MeasureFieldList;
    /**
     * The color field wells of a line chart. Values are grouped by category fields.
     */
    Colors?: DimensionFieldList;
    /**
     * The small multiples field well of a line chart.
     */
    SmallMultiples?: SmallMultiplesDimensionFieldList;
  }
  export interface LineChartConfiguration {
    /**
     * The field well configuration of a line chart.
     */
    FieldWells?: LineChartFieldWells;
    /**
     * The sort configuration of a line chart.
     */
    SortConfiguration?: LineChartSortConfiguration;
    /**
     * The forecast configuration of a line chart.
     */
    ForecastConfigurations?: ForecastConfigurationList;
    /**
     * Determines the type of the line chart.
     */
    Type?: LineChartType;
    /**
     * The small multiples setup for the visual.
     */
    SmallMultiplesOptions?: SmallMultiplesOptions;
    /**
     * The options that determine the presentation of the x-axis.
     */
    XAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The options that determine the presentation of the x-axis label.
     */
    XAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The series axis configuration of a line chart.
     */
    PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
    /**
     * The options that determine the presentation of the y-axis label.
     */
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The series axis configuration of a line chart.
     */
    SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
    /**
     * The options that determine the presentation of the secondary y-axis label.
     */
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The options that determine the default presentation of all line series in LineChartVisual.
     */
    DefaultSeriesSettings?: LineChartDefaultSeriesSettings;
    /**
     * The series item configuration of a line chart.
     */
    Series?: SeriesItemList;
    /**
     * The legend configuration of a line chart.
     */
    Legend?: LegendOptions;
    /**
     * The data label configuration of a line chart.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The reference lines configuration of a line chart.
     */
    ReferenceLines?: ReferenceLineList;
    /**
     * The tooltip configuration of a line chart.
     */
    Tooltip?: TooltipOptions;
    /**
     * The default configuration of a line chart's contribution analysis.
     */
    ContributionAnalysisDefaults?: ContributionAnalysisDefaultList;
    /**
     * The visual palette configuration of a line chart.
     */
    VisualPalette?: VisualPalette;
  }
  export interface LineChartDefaultSeriesSettings {
    /**
     * The axis to which you are binding all line series to.
     */
    AxisBinding?: AxisBinding;
    /**
     * Line styles options for all line series in the visual.
     */
    LineStyleSettings?: LineChartLineStyleSettings;
    /**
     * Marker styles options for all line series in the visual.
     */
    MarkerStyleSettings?: LineChartMarkerStyleSettings;
  }
  export interface LineChartFieldWells {
    /**
     * The field well configuration of a line chart.
     */
    LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
  }
  export type LineChartLineStyle = "SOLID"|"DOTTED"|"DASHED"|string;
  export interface LineChartLineStyleSettings {
    /**
     * Configuration option that determines whether to show the line for the series.
     */
    LineVisibility?: Visibility;
    /**
     * Interpolation style for line series.    LINEAR: Show as default, linear style.    SMOOTH: Show as a smooth curve.    STEPPED: Show steps in line.  
     */
    LineInterpolation?: LineInterpolation;
    /**
     * Line style for line series.    SOLID: Show as a solid line.    DOTTED: Show as a dotted line.    DASHED: Show as a dashed line.  
     */
    LineStyle?: LineChartLineStyle;
    /**
     * Width that determines the line thickness.
     */
    LineWidth?: PixelLength;
  }
  export type LineChartMarkerShape = "CIRCLE"|"TRIANGLE"|"SQUARE"|"DIAMOND"|"ROUNDED_SQUARE"|string;
  export interface LineChartMarkerStyleSettings {
    /**
     * Configuration option that determines whether to show the markers in the series.
     */
    MarkerVisibility?: Visibility;
    /**
     * Shape option for markers in the series.    CIRCLE: Show marker as a circle.    TRIANGLE: Show marker as a triangle.    SQUARE: Show marker as a square.    DIAMOND: Show marker as a diamond.    ROUNDED_SQUARE: Show marker as a rounded square.  
     */
    MarkerShape?: LineChartMarkerShape;
    /**
     * Size of marker in the series.
     */
    MarkerSize?: PixelLength;
    /**
     * Color of marker in the series.
     */
    MarkerColor?: HexColor;
  }
  export interface LineChartSeriesSettings {
    /**
     * Line styles options for a line series in LineChartVisual.
     */
    LineStyleSettings?: LineChartLineStyleSettings;
    /**
     * Marker styles options for a line series in LineChartVisual.
     */
    MarkerStyleSettings?: LineChartMarkerStyleSettings;
  }
  export interface LineChartSortConfiguration {
    /**
     * The sort configuration of the category fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The limit on the number of categories that are displayed in a line chart.
     */
    CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;
    /**
     * The limit on the number of lines that are displayed in a line chart.
     */
    ColorItemsLimitConfiguration?: ItemsLimitConfiguration;
    /**
     * The sort configuration of the small multiples field.
     */
    SmallMultiplesSort?: FieldSortOptionsList;
    /**
     * The limit on the number of small multiples panels that are displayed.
     */
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  }
  export type LineChartType = "LINE"|"AREA"|"STACKED_AREA"|string;
  export interface LineChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a line chart.
     */
    ChartConfiguration?: LineChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export type LineInterpolation = "LINEAR"|"SMOOTH"|"STEPPED"|string;
  export interface LineSeriesAxisDisplayOptions {
    /**
     * The options that determine the presentation of the line series axis.
     */
    AxisOptions?: AxisDisplayOptions;
    /**
     * The configuration options that determine how missing data is treated during the rendering of a line chart.
     */
    MissingDataConfigurations?: MissingDataConfigurationList;
  }
  export interface LinkSharingConfiguration {
    /**
     * A structure that contains the permissions of a shareable link.
     */
    Permissions?: ResourcePermissionList;
  }
  export interface ListAnalysesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analyses.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAnalysesResponse {
    /**
     * Metadata describing each of the analyses that are listed.
     */
    AnalysisSummaryList?: AnalysisSummaryList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListControlDisplayOptions {
    /**
     * The configuration of the search options in a list control.
     */
    SearchOptions?: ListControlSearchOptions;
    /**
     * The configuration of the Select all options in a list control.
     */
    SelectAllOptions?: ListControlSelectAllOptions;
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
  }
  export interface ListControlSearchOptions {
    /**
     * The visibility configuration of the search options in a list control.
     */
    Visibility?: Visibility;
  }
  export interface ListControlSelectAllOptions {
    /**
     * The visibility configuration of the Select all options in a list control.
     */
    Visibility?: Visibility;
  }
  export interface ListDashboardVersionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're listing versions for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDashboardVersionsResponse {
    /**
     * A structure that contains information about each version of the dashboard.
     */
    DashboardVersionSummaryList?: DashboardVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListDashboardsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboards that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDashboardsResponse {
    /**
     * A structure that contains all of the dashboards in your Amazon Web Services account. This structure provides basic information about the dashboards.
     */
    DashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListDataSetsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDataSetsResponse {
    /**
     * The list of dataset summaries.
     */
    DataSetSummaries?: DataSetSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListDataSourcesRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDataSourcesResponse {
    /**
     * A list of data sources.
     */
    DataSources?: DataSourceList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListFolderMembersRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListFolderMembersResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.
     */
    FolderMemberList?: FolderMemberList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListFoldersRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListFoldersResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.
     */
    FolderSummaryList?: FolderSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListGroupMembershipsRequest {
    /**
     * The name of the group that you want to see a membership list of.
     */
    GroupName: GroupName;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace of the group that you want a list of users from.
     */
    Namespace: Namespace;
  }
  export interface ListGroupMembershipsResponse {
    /**
     * The list of the members of the group.
     */
    GroupMemberList?: GroupMemberList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListGroupsRequest {
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace that you want a list of groups from.
     */
    Namespace: Namespace;
  }
  export interface ListGroupsResponse {
    /**
     * The list of the groups.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIAMPolicyAssignmentsForUserRequest {
    /**
     * The ID of the Amazon Web Services account that contains the assignments.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the user.
     */
    UserName: UserName;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace of the assignment.
     */
    Namespace: Namespace;
  }
  export interface ListIAMPolicyAssignmentsForUserResponse {
    /**
     * The active assignments for this user.
     */
    ActiveAssignments?: ActiveIAMPolicyAssignmentList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIAMPolicyAssignmentsRequest {
    /**
     * The ID of the Amazon Web Services account that contains these IAM policy assignments.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The status of the assignments.
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The namespace for the assignments.
     */
    Namespace: Namespace;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListIAMPolicyAssignmentsResponse {
    /**
     * Information describing the IAM policy assignments.
     */
    IAMPolicyAssignments?: IAMPolicyAssignmentSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIngestionsRequest {
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: IngestionMaxResults;
  }
  export interface ListIngestionsResponse {
    /**
     * A list of the ingestions.
     */
    Ingestions?: Ingestions;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListNamespacesRequest {
    /**
     * The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous ListNameSpaces API call if there is more data that can be returned. To receive the data, make another ListNamespaces API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a ListNamespaces API call with an expired token, you will receive a HTTP 400 InvalidNextTokenException error.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface ListNamespacesResponse {
    /**
     * The information about the namespaces in this Amazon Web Services account. The response includes the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and identity store.
     */
    Namespaces?: Namespaces;
    /**
     * A unique pagination token that can be used in a subsequent request. Receiving NextToken in your response inticates that there is more data that can be returned. To receive the data, make another ListNamespaces API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a ListNamespaces API call with an expired token, you will receive a HTTP 400 InvalidNextTokenException error.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags?: TagList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListTemplateAliasesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template aliases that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplateAliasesResponse {
    /**
     * A structure containing the list of the template's aliases.
     */
    TemplateAliasList?: TemplateAliasList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
  }
  export interface ListTemplateVersionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the templates that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplateVersionsResponse {
    /**
     * A structure containing a list of all the versions of the specified template.
     */
    TemplateVersionSummaryList?: TemplateVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListTemplatesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the templates that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplatesResponse {
    /**
     * A structure containing information about the templates in the list.
     */
    TemplateSummaryList?: TemplateSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListThemeAliasesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme aliases that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListThemeAliasesResponse {
    /**
     * A structure containing the list of the theme's aliases.
     */
    ThemeAliasList?: ThemeAliasList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
  }
  export interface ListThemeVersionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the themes that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListThemeVersionsResponse {
    /**
     * A structure containing a list of all the versions of the specified theme.
     */
    ThemeVersionSummaryList?: ThemeVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListThemesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the themes that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
    /**
     * The type of themes that you want to list. Valid options include the following:    ALL (default)- Display all existing themes.    CUSTOM - Display only the themes created by people using Amazon QuickSight.    QUICKSIGHT - Display only the starting themes defined by Amazon QuickSight.  
     */
    Type?: ThemeType;
  }
  export interface ListThemesResponse {
    /**
     * Information about the themes in the list.
     */
    ThemeSummaryList?: ThemeSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListUserGroupsRequest {
    /**
     * The Amazon QuickSight user name that you want to list group memberships for.
     */
    UserName: UserName;
    /**
     * The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListUserGroupsResponse {
    /**
     * The list of groups the user is a member of.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListUsersRequest {
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListUsersResponse {
    /**
     * The list of users.
     */
    UserList?: UserList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface LoadingAnimation {
    /**
     * The visibility configuration of LoadingAnimation.
     */
    Visibility?: Visibility;
  }
  export interface LocalNavigationConfiguration {
    /**
     * The sheet that is targeted for navigation in the same analysis.
     */
    TargetSheetId: ShortRestrictiveResourceId;
  }
  export interface LogicalTable {
    /**
     * A display name for the logical table.
     */
    Alias: LogicalTableAlias;
    /**
     * Transform operations that act on this logical table.
     */
    DataTransforms?: TransformOperationList;
    /**
     * Source of this logical table.
     */
    Source: LogicalTableSource;
  }
  export type LogicalTableAlias = string;
  export type LogicalTableId = string;
  export type LogicalTableMap = {[key: string]: LogicalTable};
  export interface LogicalTableSource {
    /**
     * Specifies the result of a join of two logical tables.
     */
    JoinInstruction?: JoinInstruction;
    /**
     * Physical table ID.
     */
    PhysicalTableId?: PhysicalTableId;
    /**
     * The Amazon Resource Number (ARN) of the parent dataset.
     */
    DataSetArn?: Arn;
  }
  export type Long = number;
  export interface LongFormatText {
    /**
     * Plain text format.
     */
    PlainText?: LongPlainText;
    /**
     * Rich text. Examples of rich text include bold, underline, and italics.
     */
    RichText?: LongRichText;
  }
  export type LongPlainText = string;
  export type LongRichText = string;
  export type Longitude = number;
  export interface ManifestFileLocation {
    /**
     * Amazon S3 bucket.
     */
    Bucket: S3Bucket;
    /**
     * Amazon S3 key that identifies an object.
     */
    Key: S3Key;
  }
  export type MapZoomMode = "AUTO"|"MANUAL"|string;
  export interface MarginStyle {
    /**
     * This Boolean value controls whether to display sheet margins.
     */
    Show?: Boolean;
  }
  export interface MariaDbParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type MaxResults = number;
  export interface MaximumLabelType {
    /**
     * The visibility of the maximum label.
     */
    Visibility?: Visibility;
  }
  export interface MaximumMinimumComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The type of computation. Choose one of the following options:   MAXIMUM: A maximum computation.   MINIMUM: A minimum computation.  
     */
    Type: MaximumMinimumComputationType;
  }
  export type MaximumMinimumComputationType = "MAXIMUM"|"MINIMUM"|string;
  export interface MeasureField {
    /**
     * The measure type field with numerical type columns.
     */
    NumericalMeasureField?: NumericalMeasureField;
    /**
     * The measure type field with categorical type columns.
     */
    CategoricalMeasureField?: CategoricalMeasureField;
    /**
     * The measure type field with date type columns.
     */
    DateMeasureField?: DateMeasureField;
    /**
     * The calculated measure field only used in pivot tables.
     */
    CalculatedMeasureField?: CalculatedMeasureField;
  }
  export type MeasureFieldList = MeasureField[];
  export interface MemberIdArnPair {
    /**
     * The ID of the member.
     */
    MemberId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the member.
     */
    MemberArn?: Arn;
  }
  export type MemberType = "DASHBOARD"|"ANALYSIS"|"DATASET"|string;
  export interface MetricComparisonComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The field that is used in a metric comparison from value setup.
     */
    FromValue: MeasureField;
    /**
     * The field that is used in a metric comparison to value setup.
     */
    TargetValue: MeasureField;
  }
  export interface MinimumLabelType {
    /**
     * The visibility of the minimum label.
     */
    Visibility?: Visibility;
  }
  export interface MissingDataConfiguration {
    /**
     * The treatment option that determines how missing data should be rendered. Choose from the following options:    INTERPOLATE: Interpolate missing values between the prior and the next known value.    SHOW_AS_ZERO: Show missing values as the value 0.    SHOW_AS_BLANK: Display a blank space when rendering missing data.  
     */
    TreatmentOption?: MissingDataTreatmentOption;
  }
  export type MissingDataConfigurationList = MissingDataConfiguration[];
  export type MissingDataTreatmentOption = "INTERPOLATE"|"SHOW_AS_ZERO"|"SHOW_AS_BLANK"|string;
  export interface MySqlParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type Namespace = string;
  export interface NamespaceError {
    /**
     * The error type.
     */
    Type?: NamespaceErrorType;
    /**
     * The message for the error.
     */
    Message?: String;
  }
  export type NamespaceErrorType = "PERMISSION_DENIED"|"INTERNAL_SERVICE_ERROR"|string;
  export interface NamespaceInfoV2 {
    /**
     * The name of the error.
     */
    Name?: Namespace;
    /**
     * The namespace ARN.
     */
    Arn?: Arn;
    /**
     * The namespace Amazon Web Services Region.
     */
    CapacityRegion?: String;
    /**
     * The creation status of a namespace that is not yet completely created.
     */
    CreationStatus?: NamespaceStatus;
    /**
     * The identity store used for the namespace.
     */
    IdentityStore?: IdentityStore;
    /**
     * An error that occurred when the namespace was created.
     */
    NamespaceError?: NamespaceError;
  }
  export type NamespaceStatus = "CREATED"|"CREATING"|"DELETING"|"RETRYABLE_FAILURE"|"NON_RETRYABLE_FAILURE"|string;
  export type Namespaces = NamespaceInfoV2[];
  export type NarrativeString = string;
  export interface NegativeValueConfiguration {
    /**
     * Determines the display mode of the negative value configuration.
     */
    DisplayMode: NegativeValueDisplayMode;
  }
  export type NegativeValueDisplayMode = "POSITIVE"|"NEGATIVE"|string;
  export type NonEmptyString = string;
  export type NullString = string;
  export interface NullValueFormatConfiguration {
    /**
     * Determines the null string of null values.
     */
    NullString: NullString;
  }
  export type NullableBoolean = boolean;
  export interface NumberDisplayFormatConfiguration {
    /**
     * Determines the prefix value of the number format.
     */
    Prefix?: Prefix;
    /**
     * Determines the suffix value of the number format.
     */
    Suffix?: Suffix;
    /**
     * The options that determine the numeric separator configuration.
     */
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    /**
     * The option that determines the decimal places configuration.
     */
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    /**
     * Determines the number scale value of the number format.
     */
    NumberScale?: NumberScale;
    /**
     * The options that determine the negative value configuration.
     */
    NegativeValueConfiguration?: NegativeValueConfiguration;
    /**
     * The options that determine the null value format configuration.
     */
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
  }
  export interface NumberFormatConfiguration {
    /**
     * The options that determine the numeric format configuration.
     */
    FormatConfiguration?: NumericFormatConfiguration;
  }
  export type NumberScale = "NONE"|"AUTO"|"THOUSANDS"|"MILLIONS"|"BILLIONS"|"TRILLIONS"|string;
  export interface NumericAxisOptions {
    /**
     * The scale setup of a numeric axis.
     */
    Scale?: AxisScale;
    /**
     * The range setup of a numeric axis.
     */
    Range?: AxisDisplayRange;
  }
  export interface NumericEqualityDrillDownFilter {
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The value of the double input numeric drill down filter.
     */
    Value: Double;
  }
  export interface NumericEqualityFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The input value.
     */
    Value?: Double;
    /**
     * Select all of the values. Null is not the assigned value of select all.    FILTER_ALL_VALUES   
     */
    SelectAllOptions?: NumericFilterSelectAllOptions;
    /**
     * The match operator that is used to determine if a filter should be applied.
     */
    MatchOperator: NumericEqualityMatchOperator;
    /**
     * The aggregation function of the filter.
     */
    AggregationFunction?: AggregationFunction;
    /**
     * The parameter whose value should be used for the filter value.
     */
    ParameterName?: ParameterName;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
  }
  export type NumericEqualityMatchOperator = "EQUALS"|"DOES_NOT_EQUAL"|string;
  export type NumericFilterSelectAllOptions = "FILTER_ALL_VALUES"|string;
  export interface NumericFormatConfiguration {
    /**
     * The options that determine the number display format configuration.
     */
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
    /**
     * The options that determine the currency display format configuration.
     */
    CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;
    /**
     * The options that determine the percentage display format configuration.
     */
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
  }
  export interface NumericRangeFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * Determines whether the minimum value in the filter value range should be included in the filtered results.
     */
    IncludeMinimum?: Boolean;
    /**
     * Determines whether the maximum value in the filter value range should be included in the filtered results.
     */
    IncludeMaximum?: Boolean;
    /**
     * The minimum value for the filter value range.
     */
    RangeMinimum?: NumericRangeFilterValue;
    /**
     * The maximum value for the filter value range.
     */
    RangeMaximum?: NumericRangeFilterValue;
    /**
     * Select all of the values. Null is not the assigned value of select all.    FILTER_ALL_VALUES   
     */
    SelectAllOptions?: NumericFilterSelectAllOptions;
    /**
     * The aggregation function of the filter.
     */
    AggregationFunction?: AggregationFunction;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
  }
  export interface NumericRangeFilterValue {
    /**
     * The static value of the numeric range filter.
     */
    StaticValue?: Double;
    /**
     * The parameter that is used in the numeric range.
     */
    Parameter?: ParameterName;
  }
  export interface NumericSeparatorConfiguration {
    /**
     * Determines the decimal separator.
     */
    DecimalSeparator?: NumericSeparatorSymbol;
    /**
     * The options that determine the thousands separator configuration.
     */
    ThousandsSeparator?: ThousandSeparatorOptions;
  }
  export type NumericSeparatorSymbol = "COMMA"|"DOT"|"SPACE"|string;
  export interface NumericalAggregationFunction {
    /**
     * Built-in aggregation functions for numerical values.    SUM: The sum of a dimension or measure.     AVERAGE: The average of a dimension or measure.    MIN: The minimum value of a dimension or measure.    MAX: The maximum value of a dimension or measure.    COUNT: The count of a dimension or measure.    DISTINCT_COUNT: The count of distinct values in a dimension or measure.    VAR: The variance of a dimension or measure.    VARP: The partitioned variance of a dimension or measure.    STDEV: The standard deviation of a dimension or measure.    STDEVP: The partitioned standard deviation of a dimension or measure.    MEDIAN: The median value of a dimension or measure.  
     */
    SimpleNumericalAggregation?: SimpleNumericalAggregationFunction;
    /**
     * An aggregation based on the percentile of values in a dimension or measure.
     */
    PercentileAggregation?: PercentileAggregation;
  }
  export interface NumericalDimensionField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the NumericalDimensionField.
     */
    Column: ColumnIdentifier;
    /**
     * The custom hierarchy ID.
     */
    HierarchyId?: HierarchyId;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: NumberFormatConfiguration;
  }
  export interface NumericalMeasureField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the NumericalMeasureField.
     */
    Column: ColumnIdentifier;
    /**
     * The aggregation function of the measure field.
     */
    AggregationFunction?: NumericalAggregationFunction;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: NumberFormatConfiguration;
  }
  export type OnClause = string;
  export type OptionalPort = number;
  export interface OracleParameters {
    /**
     * An Oracle host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type OtherCategories = "INCLUDE"|"EXCLUDE"|string;
  export interface OutputColumn {
    /**
     * A display name for the dataset.
     */
    Name?: ColumnName;
    /**
     * A description for a column.
     */
    Description?: ColumnDescriptiveText;
    /**
     * Type.
     */
    Type?: ColumnDataType;
  }
  export type OutputColumnList = OutputColumn[];
  export type PageNumber = number;
  export interface PaginationConfiguration {
    /**
     * Indicates how many items render in one page.
     */
    PageSize: Long;
    /**
     * Indicates the page number.
     */
    PageNumber: PageNumber;
  }
  export type PanelBorderStyle = "SOLID"|"DASHED"|"DOTTED"|string;
  export interface PanelConfiguration {
    /**
     * Configures the title display within each small multiples panel.
     */
    Title?: PanelTitleOptions;
    /**
     * Determines whether or not each panel displays a border.
     */
    BorderVisibility?: Visibility;
    /**
     * Sets the line thickness of panel borders.
     */
    BorderThickness?: PixelLength;
    /**
     * Sets the line style of panel borders.
     */
    BorderStyle?: PanelBorderStyle;
    /**
     * Sets the line color of panel borders.
     */
    BorderColor?: HexColorWithTransparency;
    /**
     * Determines whether or not negative space between sibling panels is rendered.
     */
    GutterVisibility?: Visibility;
    /**
     * Sets the total amount of negative space to display between sibling panels.
     */
    GutterSpacing?: PixelLength;
    /**
     * Determines whether or not a background for each small multiples panel is rendered.
     */
    BackgroundVisibility?: Visibility;
    /**
     * Sets the background color for each panel.
     */
    BackgroundColor?: HexColorWithTransparency;
  }
  export interface PanelTitleOptions {
    /**
     * Determines whether or not panel titles are displayed.
     */
    Visibility?: Visibility;
    FontConfiguration?: FontConfiguration;
    /**
     * Sets the horizontal text alignment of the title within each panel.
     */
    HorizontalTextAlignment?: HorizontalTextAlignment;
  }
  export type PaperOrientation = "PORTRAIT"|"LANDSCAPE"|string;
  export type PaperSize = "US_LETTER"|"US_LEGAL"|"US_TABLOID_LEDGER"|"A0"|"A1"|"A2"|"A3"|"A4"|"A5"|"JIS_B4"|"JIS_B5"|string;
  export interface ParameterControl {
    /**
     * A control from a date parameter that specifies date and time.
     */
    DateTimePicker?: ParameterDateTimePickerControl;
    /**
     * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
     */
    List?: ParameterListControl;
    /**
     * A control to display a dropdown list with buttons that are used to select a single value.
     */
    Dropdown?: ParameterDropDownControl;
    /**
     * A control to display a text box that is used to enter a single entry.
     */
    TextField?: ParameterTextFieldControl;
    /**
     * A control to display a text box that is used to enter multiple entries.
     */
    TextArea?: ParameterTextAreaControl;
    /**
     * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
     */
    Slider?: ParameterSliderControl;
  }
  export type ParameterControlList = ParameterControl[];
  export interface ParameterDateTimePickerControl {
    /**
     * The ID of the ParameterDateTimePickerControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterDateTimePickerControl.
     */
    Title: SheetControlTitle;
    /**
     * The name of the ParameterDateTimePickerControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The display options of a control.
     */
    DisplayOptions?: DateTimePickerControlDisplayOptions;
  }
  export interface ParameterDeclaration {
    /**
     * A parameter declaration for the String data type.
     */
    StringParameterDeclaration?: StringParameterDeclaration;
    /**
     * A parameter declaration for the Decimal data type.
     */
    DecimalParameterDeclaration?: DecimalParameterDeclaration;
    /**
     * A parameter declaration for the Integer data type.
     */
    IntegerParameterDeclaration?: IntegerParameterDeclaration;
    /**
     * A parameter declaration for the DateTime data type.
     */
    DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
  }
  export type ParameterDeclarationList = ParameterDeclaration[];
  export interface ParameterDropDownControl {
    /**
     * The ID of the ParameterDropDownControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterDropDownControl.
     */
    Title: SheetControlTitle;
    /**
     * The source parameter name of the ParameterDropDownControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The display options of a control.
     */
    DisplayOptions?: DropDownControlDisplayOptions;
    /**
     * The type parameter name of the ParameterDropDownControl.
     */
    Type?: SheetControlListType;
    /**
     * A list of selectable values that are used in a control.
     */
    SelectableValues?: ParameterSelectableValues;
    /**
     * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
     */
    CascadingControlConfiguration?: CascadingControlConfiguration;
  }
  export interface ParameterListControl {
    /**
     * The ID of the ParameterListControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterListControl.
     */
    Title: SheetControlTitle;
    /**
     * The source parameter name of the ParameterListControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The display options of a control.
     */
    DisplayOptions?: ListControlDisplayOptions;
    /**
     * The type of ParameterListControl.
     */
    Type?: SheetControlListType;
    /**
     * A list of selectable values that are used in a control.
     */
    SelectableValues?: ParameterSelectableValues;
    /**
     * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
     */
    CascadingControlConfiguration?: CascadingControlConfiguration;
  }
  export type ParameterName = string;
  export type ParameterSelectableValueList = String[];
  export interface ParameterSelectableValues {
    /**
     * The values that are used in ParameterSelectableValues.
     */
    Values?: ParameterSelectableValueList;
    /**
     * The column identifier that fetches values from the data set.
     */
    LinkToDataSetColumn?: ColumnIdentifier;
  }
  export interface ParameterSliderControl {
    /**
     * The ID of the ParameterSliderControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterSliderControl.
     */
    Title: SheetControlTitle;
    /**
     * The source parameter name of the ParameterSliderControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The display options of a control.
     */
    DisplayOptions?: SliderControlDisplayOptions;
    /**
     * The smaller value that is displayed at the left of the slider.
     */
    MaximumValue: Double;
    /**
     * The larger value that is displayed at the right of the slider.
     */
    MinimumValue: Double;
    /**
     * The number of increments that the slider bar is divided into.
     */
    StepSize: Double;
  }
  export interface ParameterTextAreaControl {
    /**
     * The ID of the ParameterTextAreaControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterTextAreaControl.
     */
    Title: SheetControlTitle;
    /**
     * The source parameter name of the ParameterTextAreaControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The delimiter that is used to separate the lines in text.
     */
    Delimiter?: TextAreaControlDelimiter;
    /**
     * The display options of a control.
     */
    DisplayOptions?: TextAreaControlDisplayOptions;
  }
  export interface ParameterTextFieldControl {
    /**
     * The ID of the ParameterTextFieldControl.
     */
    ParameterControlId: ShortRestrictiveResourceId;
    /**
     * The title of the ParameterTextFieldControl.
     */
    Title: SheetControlTitle;
    /**
     * The source parameter name of the ParameterTextFieldControl.
     */
    SourceParameterName: ParameterName;
    /**
     * The display options of a control.
     */
    DisplayOptions?: TextFieldControlDisplayOptions;
  }
  export type ParameterValueType = "MULTI_VALUED"|"SINGLE_VALUED"|string;
  export interface Parameters {
    /**
     * The parameters that have a data type of string.
     */
    StringParameters?: StringParameterList;
    /**
     * The parameters that have a data type of integer.
     */
    IntegerParameters?: IntegerParameterList;
    /**
     * The parameters that have a data type of decimal.
     */
    DecimalParameters?: DecimalParameterList;
    /**
     * The parameters that have a data type of date-time.
     */
    DateTimeParameters?: DateTimeParameterList;
  }
  export type Password = string;
  export type Path = Arn[];
  export type PercentNumber = number;
  export interface PercentVisibleRange {
    /**
     * The lower bound of the range.
     */
    From?: PercentNumber;
    /**
     * The top bound of the range.
     */
    To?: PercentNumber;
  }
  export interface PercentageDisplayFormatConfiguration {
    /**
     * Determines the prefix value of the percentage format.
     */
    Prefix?: Prefix;
    /**
     * Determines the suffix value of the percentage format.
     */
    Suffix?: Suffix;
    /**
     * The options that determine the numeric separator configuration.
     */
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    /**
     * The option that determines the decimal places configuration.
     */
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    /**
     * The options that determine the negative value configuration.
     */
    NegativeValueConfiguration?: NegativeValueConfiguration;
    /**
     * The options that determine the null value format configuration.
     */
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
  }
  export interface PercentileAggregation {
    /**
     * The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.
     */
    PercentileValue?: PercentileValue;
  }
  export type PercentileValue = number;
  export interface PeriodOverPeriodComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
  }
  export interface PeriodToDateComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The time granularity setup of period to date computation. Choose from the following options:   YEAR: Year to date.   MONTH: Month to date.  
     */
    PeriodTimeGranularity?: TimeGranularity;
  }
  export type PeriodsBackward = number;
  export type PeriodsForward = number;
  export interface PhysicalTable {
    /**
     * A physical table type for relational data sources.
     */
    RelationalTable?: RelationalTable;
    /**
     * A physical table type built from the results of the custom SQL query.
     */
    CustomSql?: CustomSql;
    /**
     * A physical table type for as S3 data source.
     */
    S3Source?: S3Source;
  }
  export type PhysicalTableId = string;
  export type PhysicalTableMap = {[key: string]: PhysicalTable};
  export interface PieChartAggregatedFieldWells {
    /**
     * The category (group/color) field wells of a pie chart.
     */
    Category?: DimensionFieldList;
    /**
     * The value field wells of a pie chart. Values are aggregated based on categories.
     */
    Values?: MeasureFieldList;
    /**
     * The small multiples field well of a pie chart.
     */
    SmallMultiples?: SmallMultiplesDimensionFieldList;
  }
  export interface PieChartConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: PieChartFieldWells;
    /**
     * The sort configuration of a pie chart.
     */
    SortConfiguration?: PieChartSortConfiguration;
    /**
     * The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.
     */
    DonutOptions?: DonutOptions;
    /**
     * The small multiples setup for the visual.
     */
    SmallMultiplesOptions?: SmallMultiplesOptions;
    /**
     * The label options of the group/color that is displayed in a pie chart.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options for the value that is displayed in a pie chart.
     */
    ValueLabelOptions?: ChartAxisLabelOptions;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The palette (chart color) display setup of the visual.
     */
    VisualPalette?: VisualPalette;
    /**
     * The contribution analysis (anomaly configuration) setup of the visual.
     */
    ContributionAnalysisDefaults?: ContributionAnalysisDefaultList;
  }
  export interface PieChartFieldWells {
    /**
     * The field well configuration of a pie chart.
     */
    PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
  }
  export interface PieChartSortConfiguration {
    /**
     * The sort configuration of the category fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The limit on the number of categories that are displayed in a pie chart.
     */
    CategoryItemsLimit?: ItemsLimitConfiguration;
    /**
     * The sort configuration of the small multiples field.
     */
    SmallMultiplesSort?: FieldSortOptionsList;
    /**
     * The limit on the number of small multiples panels that are displayed.
     */
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  }
  export interface PieChartVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a pie chart.
     */
    ChartConfiguration?: PieChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface PivotFieldSortOptions {
    /**
     * The field ID for the field sort options.
     */
    FieldId: FieldId;
    /**
     * The sort by field for the field sort options.
     */
    SortBy: PivotTableSortBy;
  }
  export type PivotFieldSortOptionsList = PivotFieldSortOptions[];
  export type PivotMeasureFieldList = MeasureField[];
  export interface PivotTableAggregatedFieldWells {
    /**
     * The rows field well for a pivot table. Values are grouped by rows fields.
     */
    Rows?: PivotTableDimensionList;
    /**
     * The columns field well for a pivot table. Values are grouped by columns fields.
     */
    Columns?: PivotTableDimensionList;
    /**
     * The values field well for a pivot table. Values are aggregated based on rows and columns fields.
     */
    Values?: PivotMeasureFieldList;
  }
  export interface PivotTableCellConditionalFormatting {
    /**
     * The field ID of the cell for conditional formatting.
     */
    FieldId: FieldId;
    /**
     * The text format of the cell for conditional formatting.
     */
    TextFormat?: TextConditionalFormat;
    /**
     * The scope of the cell for conditional formatting.
     */
    Scope?: PivotTableConditionalFormattingScope;
  }
  export interface PivotTableConditionalFormatting {
    /**
     * Conditional formatting options for a PivotTableVisual.
     */
    ConditionalFormattingOptions?: PivotTableConditionalFormattingOptionList;
  }
  export interface PivotTableConditionalFormattingOption {
    /**
     * The cell conditional formatting option for a pivot table.
     */
    Cell?: PivotTableCellConditionalFormatting;
  }
  export type PivotTableConditionalFormattingOptionList = PivotTableConditionalFormattingOption[];
  export interface PivotTableConditionalFormattingScope {
    /**
     * The role (field, field total, grand total) of the cell for conditional formatting.
     */
    Role?: PivotTableConditionalFormattingScopeRole;
  }
  export type PivotTableConditionalFormattingScopeRole = "FIELD"|"FIELD_TOTAL"|"GRAND_TOTAL"|string;
  export interface PivotTableConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: PivotTableFieldWells;
    /**
     * The sort configuration for a PivotTableVisual.
     */
    SortConfiguration?: PivotTableSortConfiguration;
    /**
     * The table options for a pivot table visual.
     */
    TableOptions?: PivotTableOptions;
    /**
     * The total options for a pivot table visual.
     */
    TotalOptions?: PivotTableTotalOptions;
    /**
     * The field options for a pivot table visual.
     */
    FieldOptions?: PivotTableFieldOptions;
    /**
     * The paginated report options for a pivot table visual.
     */
    PaginatedReportOptions?: PivotTablePaginatedReportOptions;
  }
  export interface PivotTableDataPathOption {
    /**
     * The list of data path values for the data path options.
     */
    DataPathList: DataPathValueList;
    /**
     * The width of the data path option.
     */
    Width?: PixelLength;
  }
  export type PivotTableDataPathOptionList = PivotTableDataPathOption[];
  export type PivotTableDimensionList = DimensionField[];
  export interface PivotTableFieldOption {
    /**
     * The field ID of the pivot table field.
     */
    FieldId: FieldId;
    /**
     * The custom label of the pivot table field.
     */
    CustomLabel?: CustomLabel;
    /**
     * The visibility of the pivot table field.
     */
    Visibility?: Visibility;
  }
  export type PivotTableFieldOptionList = PivotTableFieldOption[];
  export interface PivotTableFieldOptions {
    /**
     * The selected field options for the pivot table field options.
     */
    SelectedFieldOptions?: PivotTableFieldOptionList;
    /**
     * The data path options for the pivot table field options.
     */
    DataPathOptions?: PivotTableDataPathOptionList;
  }
  export interface PivotTableFieldSubtotalOptions {
    /**
     * The field ID of the subtotal options.
     */
    FieldId?: FieldId;
  }
  export type PivotTableFieldSubtotalOptionsList = PivotTableFieldSubtotalOptions[];
  export interface PivotTableFieldWells {
    /**
     * The aggregated field well for the pivot table.
     */
    PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
  }
  export type PivotTableMetricPlacement = "ROW"|"COLUMN"|string;
  export interface PivotTableOptions {
    /**
     * The metric placement (row, column) options.
     */
    MetricPlacement?: PivotTableMetricPlacement;
    /**
     * The visibility of the single metric options.
     */
    SingleMetricVisibility?: Visibility;
    /**
     * The visibility of the column names.
     */
    ColumnNamesVisibility?: Visibility;
    /**
     * Determines the visibility of the pivot table.
     */
    ToggleButtonsVisibility?: Visibility;
    /**
     * The table cell style of the column header.
     */
    ColumnHeaderStyle?: TableCellStyle;
    /**
     * The table cell style of the row headers.
     */
    RowHeaderStyle?: TableCellStyle;
    /**
     * The table cell style of cells.
     */
    CellStyle?: TableCellStyle;
    /**
     * The table cell style of row field names.
     */
    RowFieldNamesStyle?: TableCellStyle;
    /**
     * The row alternate color options (widget status, row alternate colors).
     */
    RowAlternateColorOptions?: RowAlternateColorOptions;
  }
  export interface PivotTablePaginatedReportOptions {
    /**
     * The visibility of the printing table overflow across pages.
     */
    VerticalOverflowVisibility?: Visibility;
    /**
     * The visibility of the repeating header rows on each page.
     */
    OverflowColumnHeaderVisibility?: Visibility;
  }
  export interface PivotTableSortBy {
    /**
     * The field sort (field id, direction) for the pivot table sort by options.
     */
    Field?: FieldSort;
    /**
     * The column sort (field id, direction) for the pivot table sort by options.
     */
    Column?: ColumnSort;
    /**
     * The data path sort (data path value, direction) for the pivot table sort by options.
     */
    DataPath?: DataPathSort;
  }
  export interface PivotTableSortConfiguration {
    /**
     * The field sort options for a pivot table sort configuration.
     */
    FieldSortOptions?: PivotFieldSortOptionsList;
  }
  export type PivotTableSubtotalLevel = "ALL"|"CUSTOM"|"LAST"|string;
  export interface PivotTableTotalOptions {
    /**
     * The row subtotal options.
     */
    RowSubtotalOptions?: SubtotalOptions;
    /**
     * The column subtotal options.
     */
    ColumnSubtotalOptions?: SubtotalOptions;
    /**
     * The row total options.
     */
    RowTotalOptions?: PivotTotalOptions;
    /**
     * The column total options.
     */
    ColumnTotalOptions?: PivotTotalOptions;
  }
  export interface PivotTableVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: PivotTableConfiguration;
    /**
     * The conditional formatting for a PivotTableVisual.
     */
    ConditionalFormatting?: PivotTableConditionalFormatting;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface PivotTotalOptions {
    /**
     * The visibility configuration for the total cells.
     */
    TotalsVisibility?: Visibility;
    /**
     * The placement (start, end) for the total cells.
     */
    Placement?: TableTotalsPlacement;
    /**
     * The scroll status (pinned, scrolled) for the total cells.
     */
    ScrollStatus?: TableTotalsScrollStatus;
    /**
     * The custom label string for the total cells.
     */
    CustomLabel?: String;
    /**
     * The cell styling options for the total cells.
     */
    TotalCellStyle?: TableCellStyle;
    /**
     * The cell styling options for the totals of value cells.
     */
    ValueCellStyle?: TableCellStyle;
    /**
     * The cell styling options for the total of header cells.
     */
    MetricHeaderCellStyle?: TableCellStyle;
  }
  export type PixelLength = string;
  export type Port = number;
  export type PositiveInteger = number;
  export interface PostgreSqlParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface PredefinedHierarchy {
    /**
     * The hierarchy ID of the predefined hierarchy.
     */
    HierarchyId: HierarchyId;
    /**
     * The list of columns that define the predefined hierarchy.
     */
    Columns: PredefinedHierarchyColumnList;
    /**
     * The option that determines the drill down filters for the predefined hierarchy.
     */
    DrillDownFilters?: DrillDownFilterList;
  }
  export type PredefinedHierarchyColumnList = ColumnIdentifier[];
  export type PredictionInterval = number;
  export type Prefix = string;
  export interface PrestoParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Catalog.
     */
    Catalog: Catalog;
  }
  export type PrimaryValueDisplayType = "HIDDEN"|"COMPARISON"|"ACTUAL"|string;
  export type Principal = string;
  export type PrincipalList = String[];
  export interface ProgressBarOptions {
    /**
     * The visibility of the progress bar.
     */
    Visibility?: Visibility;
  }
  export interface ProjectOperation {
    /**
     * Projected columns.
     */
    ProjectedColumns: ProjectedColumnList;
  }
  export type ProjectedColumnList = String[];
  export type Query = string;
  export interface QueueInfo {
    /**
     * The ID of the queued ingestion.
     */
    WaitingOnIngestion: String;
    /**
     * The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing ingestion to complete.
     */
    QueuedIngestion: String;
  }
  export interface RangeEndsLabelType {
    /**
     * The visibility of the range ends label.
     */
    Visibility?: Visibility;
  }
  export interface RdsParameters {
    /**
     * Instance ID.
     */
    InstanceId: InstanceId;
    /**
     * Database.
     */
    Database: Database;
  }
  export type RecoveryWindowInDays = number;
  export interface RedshiftParameters {
    /**
     * Host. This field can be blank if ClusterId is provided.
     */
    Host?: Host;
    /**
     * Port. This field can be blank if the ClusterId is provided.
     */
    Port?: OptionalPort;
    /**
     * Database.
     */
    Database: Database;
    /**
     * Cluster ID. This field can be blank if the Host and Port are provided.
     */
    ClusterId?: ClusterId;
  }
  export interface ReferenceLine {
    /**
     * The status of the reference line. Choose one of the following options:    ENABLE     DISABLE   
     */
    Status?: WidgetStatus;
    /**
     * The data configuration of the reference line.
     */
    DataConfiguration: ReferenceLineDataConfiguration;
    /**
     * The style configuration of the reference line.
     */
    StyleConfiguration?: ReferenceLineStyleConfiguration;
    /**
     * The label configuration of the reference line.
     */
    LabelConfiguration?: ReferenceLineLabelConfiguration;
  }
  export interface ReferenceLineCustomLabelConfiguration {
    /**
     * The string text of the custom label.
     */
    CustomLabel: NonEmptyString;
  }
  export interface ReferenceLineDataConfiguration {
    /**
     * The static data configuration of the reference line data configuration.
     */
    StaticConfiguration?: ReferenceLineStaticDataConfiguration;
    /**
     * The dynamic configuration of the reference line data configuration.
     */
    DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;
    /**
     * The axis binding type of the reference line. Choose one of the following options:   PrimaryY   SecondaryY  
     */
    AxisBinding?: AxisBinding;
  }
  export interface ReferenceLineDynamicDataConfiguration {
    /**
     * The column that the dynamic data targets.
     */
    Column: ColumnIdentifier;
    /**
     * The aggregation function that is used in the dynamic data.
     */
    MeasureAggregationFunction: AggregationFunction;
    /**
     * The calculation that is used in the dynamic data.
     */
    Calculation: NumericalAggregationFunction;
  }
  export interface ReferenceLineLabelConfiguration {
    /**
     * The value label configuration of the label in a reference line.
     */
    ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;
    /**
     * The custom label configuration of the label in a reference line.
     */
    CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;
    /**
     * The font configuration of the label in a reference line.
     */
    FontConfiguration?: FontConfiguration;
    /**
     * The font color configuration of the label in a reference line.
     */
    FontColor?: HexColor;
    /**
     * The horizontal position configuration of the label in a reference line. Choose one of the following options:    LEFT     CENTER     RIGHT   
     */
    HorizontalPosition?: ReferenceLineLabelHorizontalPosition;
    /**
     * The vertical position configuration of the label in a reference line. Choose one of the following options:    ABOVE     BELOW   
     */
    VerticalPosition?: ReferenceLineLabelVerticalPosition;
  }
  export type ReferenceLineLabelHorizontalPosition = "LEFT"|"CENTER"|"RIGHT"|string;
  export type ReferenceLineLabelVerticalPosition = "ABOVE"|"BELOW"|string;
  export type ReferenceLineList = ReferenceLine[];
  export type ReferenceLinePatternType = "SOLID"|"DASHED"|"DOTTED"|string;
  export interface ReferenceLineStaticDataConfiguration {
    /**
     * The double input of the static data.
     */
    Value: SensitiveDouble;
  }
  export interface ReferenceLineStyleConfiguration {
    /**
     * The pattern type of the line style. Choose one of the following options:    SOLID     DASHED     DOTTED   
     */
    Pattern?: ReferenceLinePatternType;
    /**
     * The hex color of the reference line.
     */
    Color?: HexColor;
  }
  export interface ReferenceLineValueLabelConfiguration {
    /**
     * The relative position of the value label. Choose one of the following options:    BEFORE_CUSTOM_LABEL     AFTER_CUSTOM_LABEL   
     */
    RelativePosition?: ReferenceLineValueLabelRelativePosition;
    /**
     * The format configuration of the value label.
     */
    FormatConfiguration?: NumericFormatConfiguration;
  }
  export type ReferenceLineValueLabelRelativePosition = "BEFORE_CUSTOM_LABEL"|"AFTER_CUSTOM_LABEL"|string;
  export interface RegisterUserRequest {
    /**
     * Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.   
     */
    IdentityType: IdentityType;
    /**
     * The email address of the user that you want to register.
     */
    Email: String;
    /**
     * The Amazon QuickSight role for the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.  
     */
    UserRole: UserRole;
    /**
     * The ARN of the IAM user or role that you are registering with Amazon QuickSight. 
     */
    IamArn?: String;
    /**
     * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the CLI Reference. 
     */
    SessionName?: RoleSessionName;
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The Amazon QuickSight user name that you want to create for the user you are registering.
     */
    UserName?: UserName;
    /**
     * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   To add custom permissions to an existing user, use  UpdateUser  instead. A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Amazon QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a Amazon QuickSight user.  Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Amazon QuickSight users to one of the default security cohorts in Amazon QuickSight (admin, author, reader). This feature is available only to Amazon QuickSight Enterprise edition subscriptions.
     */
    CustomPermissionsName?: RoleName;
    /**
     * The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.    COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the COGNITO provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.    CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider. When choosing CUSTOM_OIDC type, use the CustomFederationProviderUrl parameter to provide the custom OIDC provider URL.  
     */
    ExternalLoginFederationProviderType?: String;
    /**
     * The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should only be used when ExternalLoginFederationProviderType parameter is set to CUSTOM_OIDC.
     */
    CustomFederationProviderUrl?: String;
    /**
     * The identity ID for a user in the external login provider.
     */
    ExternalLoginId?: String;
  }
  export interface RegisterUserResponse {
    /**
     * The user's user name.
     */
    User?: User;
    /**
     * The URL the user visits to complete registration and provide a password. This is returned only for users with an identity type of QUICKSIGHT.
     */
    UserInvitationUrl?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface RegisteredUserDashboardEmbeddingConfiguration {
    /**
     * The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard if the user has permissions to view it. If the user does not have permission to view this dashboard, they see a permissions error message.
     */
    InitialDashboardId: ShortRestrictiveResourceId;
  }
  export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
    /**
     * The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual. The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the AuthorizedResourceArns parameter. Otherwise, the request will fail with InvalidParameterValueException.
     */
    InitialDashboardVisualId: DashboardVisualId;
  }
  export interface RegisteredUserEmbeddingExperienceConfiguration {
    /**
     * The configuration details for providing a dashboard embedding experience.
     */
    Dashboard?: RegisteredUserDashboardEmbeddingConfiguration;
    /**
     * The configuration details for providing each Amazon QuickSight console embedding experience. This can be used along with custom permissions to restrict access to certain features. For more information, see Customizing Access to the Amazon QuickSight Console in the Amazon QuickSight User Guide. Use  GenerateEmbedUrlForRegisteredUser  where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who accesses an embedded Amazon QuickSight console needs to belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the  UpdateUser  API operation. Use the  RegisterUser  API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon QuickSight User Guide:    Embedding the Full Functionality of the Amazon QuickSight Console for Authenticated Users     Customizing Access to the Amazon QuickSight Console    For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal.
     */
    QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration;
    /**
     * The configuration details for embedding the Q search bar. For more information about embedding the Q search bar, see Embedding Overview in the Amazon QuickSight User Guide.
     */
    QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration;
    /**
     * The type of embedding experience. In this case, Amazon QuickSight visuals.
     */
    DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration;
  }
  export interface RegisteredUserQSearchBarEmbeddingConfiguration {
    /**
     * The ID of the Q topic that you want to make the starting topic in the Q search bar. You can find a topic ID by navigating to the Topics pane in the Amazon QuickSight application and opening a topic. The ID is in the URL for the topic that you open. If you don't specify an initial topic, a list of all shared topics is shown in the Q bar for your readers. When you select an initial topic, you can specify whether or not readers are allowed to select other topics from the available ones in the list.
     */
    InitialTopicId?: RestrictiveResourceId;
  }
  export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
    /**
     * The initial URL path for the Amazon QuickSight console. InitialPath is required. The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId. DashboardId is the actual ID key from the Amazon QuickSight console URL of the dashboard.    /analyses/AnalysisId. AnalysisId is the actual ID key from the Amazon QuickSight console URL of the analysis.  
     */
    InitialPath?: EntryPath;
  }
  export interface RelationalTable {
    /**
     * The Amazon Resource Name (ARN) for the data source.
     */
    DataSourceArn: Arn;
    /**
     * The catalog associated with a table.
     */
    Catalog?: RelationalTableCatalog;
    /**
     * The schema name. This name applies to certain relational database engines.
     */
    Schema?: RelationalTableSchema;
    /**
     * The name of the relational table.
     */
    Name: RelationalTableName;
    /**
     * The column schema of the table.
     */
    InputColumns: InputColumnList;
  }
  export type RelationalTableCatalog = string;
  export type RelationalTableName = string;
  export type RelationalTableSchema = string;
  export interface RelativeDateTimeControlDisplayOptions {
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
    /**
     * Customize how dates are formatted in controls.
     */
    DateTimeFormat?: DateTimeFormat;
  }
  export type RelativeDateType = "PREVIOUS"|"THIS"|"LAST"|"NOW"|"NEXT"|string;
  export interface RelativeDatesFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The date configuration of the filter.
     */
    AnchorDateConfiguration: AnchorDateConfiguration;
    /**
     * The minimum granularity (period granularity) of the relative dates filter.
     */
    MinimumGranularity?: TimeGranularity;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity: TimeGranularity;
    /**
     * The range date type of the filter. Choose one of the options below:    PREVIOUS     THIS     LAST     NOW     NEXT   
     */
    RelativeDateType: RelativeDateType;
    /**
     * The date value of the filter.
     */
    RelativeDateValue?: Integer;
    /**
     * The parameter whose value should be used for the filter value.
     */
    ParameterName?: ParameterName;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
    /**
     * The configuration for the exclude period of the filter.
     */
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
  }
  export type RelativeFontSize = "EXTRA_SMALL"|"SMALL"|"MEDIUM"|"LARGE"|"EXTRA_LARGE"|string;
  export interface RenameColumnOperation {
    /**
     * The name of the column to be renamed.
     */
    ColumnName: ColumnName;
    /**
     * The new name for the column.
     */
    NewColumnName: ColumnName;
  }
  export type ResizeOption = "FIXED"|"RESPONSIVE"|string;
  export type ResourceId = string;
  export type ResourceName = string;
  export interface ResourcePermission {
    /**
     * The Amazon Resource Name (ARN) of the principal. This can be one of the following:   The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)   The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)   The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight ARN. Use this option only to share resources (templates) across Amazon Web Services accounts. (This is less common.)   
     */
    Principal: Principal;
    /**
     * The IAM action to grant or revoke permissions on.
     */
    Actions: ActionList;
  }
  export type ResourcePermissionList = ResourcePermission[];
  export type ResourceStatus = "CREATION_IN_PROGRESS"|"CREATION_SUCCESSFUL"|"CREATION_FAILED"|"UPDATE_IN_PROGRESS"|"UPDATE_SUCCESSFUL"|"UPDATE_FAILED"|"DELETED"|string;
  export interface RestoreAnalysisRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're restoring.
     */
    AnalysisId: ShortRestrictiveResourceId;
  }
  export interface RestoreAnalysisResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the analysis that you're restoring.
     */
    Arn?: Arn;
    /**
     * The ID of the analysis that you're restoring. 
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export type RestrictiveResourceId = string;
  export type RoleArn = string;
  export type RoleName = string;
  export type RoleSessionName = string;
  export interface RollingDateConfiguration {
    /**
     * The data set that is used in the rolling date configuration.
     */
    DataSetIdentifier?: DataSetIdentifier;
    /**
     * The expression of the rolling date configuration.
     */
    Expression: Expression;
  }
  export type RowAlternateColorList = HexColor[];
  export interface RowAlternateColorOptions {
    /**
     * Determines the widget status.
     */
    Status?: WidgetStatus;
    /**
     * Determines the list of row alternate colors.
     */
    RowAlternateColors?: RowAlternateColorList;
  }
  export interface RowInfo {
    /**
     * The number of rows that were ingested.
     */
    RowsIngested?: Long;
    /**
     * The number of rows that were not ingested.
     */
    RowsDropped?: Long;
    /**
     * The total number of rows in the dataset.
     */
    TotalRowsInDataset?: Long;
  }
  export interface RowLevelPermissionDataSet {
    /**
     * The namespace associated with the dataset that contains permissions for RLS.
     */
    Namespace?: Namespace;
    /**
     * The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
     */
    Arn: Arn;
    /**
     * The type of permissions to use when interpreting the permissions for RLS. DENY_ACCESS is included for backward compatibility only.
     */
    PermissionPolicy: RowLevelPermissionPolicy;
    /**
     * The user or group rules associated with the dataset that contains permissions for RLS. By default, FormatVersion is VERSION_1. When FormatVersion is VERSION_1, UserName and GroupName are required. When FormatVersion is VERSION_2, UserARN and GroupARN are required, and Namespace must not exist.
     */
    FormatVersion?: RowLevelPermissionFormatVersion;
    /**
     * The status of the row-level security permission dataset. If enabled, the status is ENABLED. If disabled, the status is DISABLED.
     */
    Status?: Status;
  }
  export type RowLevelPermissionFormatVersion = "VERSION_1"|"VERSION_2"|string;
  export type RowLevelPermissionPolicy = "GRANT_ACCESS"|"DENY_ACCESS"|string;
  export interface RowLevelPermissionTagConfiguration {
    /**
     * The status of row-level security tags. If enabled, the status is ENABLED. If disabled, the status is DISABLED.
     */
    Status?: Status;
    /**
     * A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.
     */
    TagRules: RowLevelPermissionTagRuleList;
  }
  export type RowLevelPermissionTagDelimiter = string;
  export interface RowLevelPermissionTagRule {
    /**
     * The unique key for a tag.
     */
    TagKey: SessionTagKey;
    /**
     * The column name that a tag key is assigned to.
     */
    ColumnName: String;
    /**
     * A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.
     */
    TagMultiValueDelimiter?: RowLevelPermissionTagDelimiter;
    /**
     * A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.
     */
    MatchAllValue?: SessionTagValue;
  }
  export type RowLevelPermissionTagRuleList = RowLevelPermissionTagRule[];
  export type RowSortList = FieldSortOptions[];
  export type S3Bucket = string;
  export type S3Key = string;
  export interface S3Parameters {
    /**
     * Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded into Amazon QuickSight.
     */
    ManifestFileLocation: ManifestFileLocation;
  }
  export interface S3Source {
    /**
     * The Amazon Resource Name (ARN) for the data source.
     */
    DataSourceArn: Arn;
    /**
     * Information about the format for the S3 source file or files.
     */
    UploadSettings?: UploadSettings;
    /**
     * A physical table type for an S3 data source.  For files that aren't JSON, only STRING data types are supported in input columns. 
     */
    InputColumns: InputColumnList;
  }
  export interface SameSheetTargetVisualConfiguration {
    /**
     * A list of the target visual IDs that are located in the same sheet of the analysis.
     */
    TargetVisuals?: TargetVisualList;
    /**
     * The options that choose the target visual in the same sheet. Valid values are defined as follows:    ALL_VISUALS: Applies the filter operation to all visuals in the same sheet.  
     */
    TargetVisualOptions?: TargetVisualOptions;
  }
  export interface SankeyDiagramAggregatedFieldWells {
    /**
     * The source field wells of a sankey diagram.
     */
    Source?: DimensionFieldList;
    /**
     * The destination field wells of a sankey diagram.
     */
    Destination?: DimensionFieldList;
    /**
     * The weight field wells of a sankey diagram.
     */
    Weight?: MeasureFieldList;
  }
  export interface SankeyDiagramChartConfiguration {
    /**
     * The field well configuration of a sankey diagram.
     */
    FieldWells?: SankeyDiagramFieldWells;
    /**
     * The sort configuration of a sankey diagram.
     */
    SortConfiguration?: SankeyDiagramSortConfiguration;
    /**
     * The data label configuration of a sankey diagram.
     */
    DataLabels?: DataLabelOptions;
  }
  export interface SankeyDiagramFieldWells {
    /**
     * The field well configuration of a sankey diagram.
     */
    SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
  }
  export interface SankeyDiagramSortConfiguration {
    /**
     * The sort configuration of the weight fields.
     */
    WeightSort?: FieldSortOptionsList;
    /**
     * The limit on the number of source nodes that are displayed in a sankey diagram.
     */
    SourceItemsLimit?: ItemsLimitConfiguration;
    /**
     * The limit on the number of destination nodes that are displayed in a sankey diagram.
     */
    DestinationItemsLimit?: ItemsLimitConfiguration;
  }
  export interface SankeyDiagramVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration of a sankey diagram.
     */
    ChartConfiguration?: SankeyDiagramChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface ScatterPlotCategoricallyAggregatedFieldWells {
    /**
     * The x-axis field well of a scatter plot. The x-axis is aggregated by category.
     */
    XAxis?: MeasureFieldList;
    /**
     * The y-axis field well of a scatter plot. The y-axis is aggregated by category.
     */
    YAxis?: MeasureFieldList;
    /**
     * The category field well of a scatter plot.
     */
    Category?: DimensionFieldList;
    /**
     * The size field well of a scatter plot.
     */
    Size?: MeasureFieldList;
  }
  export interface ScatterPlotConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: ScatterPlotFieldWells;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.
     */
    XAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.
     */
    XAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.
     */
    YAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.
     */
    YAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The legend display setup of the visual.
     */
    Tooltip?: TooltipOptions;
    /**
     * The palette (chart color) display setup of the visual.
     */
    VisualPalette?: VisualPalette;
  }
  export interface ScatterPlotFieldWells {
    /**
     * The aggregated field wells of a scatter plot. Scatter plots that have a field in the category (group/color) field will have aggregated field wells. The x and y-axes of these scatter plots are aggregated by category.
     */
    ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;
    /**
     * The unaggregated field wells of a scatter plot. Scatter plots without a category field well have unaggregated field wells. The x and y-axes of these scatter plots are unaggregated.
     */
    ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
  }
  export interface ScatterPlotUnaggregatedFieldWells {
    /**
     * The x-axis field well of a scatter plot. The x-axis is a dimension field and cannot be aggregated.
     */
    XAxis?: DimensionFieldList;
    /**
     * The y-axis field well of a scatter plot. The y-axis is a dimension field and cannot be aggregated.
     */
    YAxis?: DimensionFieldList;
    /**
     * The size field well of a scatter plot.
     */
    Size?: MeasureFieldList;
  }
  export interface ScatterPlotVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: ScatterPlotConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface ScrollBarOptions {
    /**
     * The visibility of the data zoom scroll bar.
     */
    Visibility?: Visibility;
    /**
     * The visibility range for the data zoom scroll bar.
     */
    VisibleRange?: VisibleRangeOptions;
  }
  export interface SearchAnalysesRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analyses that you're searching for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The structure for the search filters that you want to apply to your search. 
     */
    Filters: AnalysisSearchFilterList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchAnalysesResponse {
    /**
     * Metadata describing the analyses that you searched for.
     */
    AnalysisSummaryList?: AnalysisSummaryList;
    /**
     * A pagination token that can be used in a subsequent request. 
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface SearchDashboardsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the user whose dashboards you're searching for. 
     */
    AwsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search. Currently, you can search only by user name, for example, "Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ] 
     */
    Filters: DashboardSearchFilterList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchDashboardsResponse {
    /**
     * The list of dashboards owned by the user specified in Filters in your request.
     */
    DashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface SearchDataSetsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search.
     */
    Filters: DataSetSearchFilterList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchDataSetsResponse {
    /**
     * A DataSetSummaries object that returns a summary of a dataset.
     */
    DataSetSummaries?: DataSetSummaryList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface SearchDataSourcesRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search.
     */
    Filters: DataSourceSearchFilterList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchDataSourcesResponse {
    /**
     * A DataSourceSummaries object that returns a summary of a data source.
     */
    DataSourceSummaries?: DataSourceSummaryList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface SearchFoldersRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, "Filters": [ { "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" } ].
     */
    Filters: FolderSearchFilterList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchFoldersResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.
     */
    FolderSummaryList?: FolderSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface SearchGroupsRequest {
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace that you want to search.
     */
    Namespace: Namespace;
    /**
     * The structure for the search filters that you want to apply to your search.
     */
    Filters: GroupSearchFilterList;
  }
  export interface SearchGroupsResponse {
    /**
     * A list of groups in a specified namespace that match the filters you set in your SearchGroups request.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type Seasonality = number;
  export interface SecondaryValueOptions {
    /**
     * Determines the visibility of the secondary value.
     */
    Visibility?: Visibility;
  }
  export type SecretArn = string;
  export interface SectionAfterPageBreak {
    /**
     * The option that enables or disables a page break at the end of a section.
     */
    Status?: SectionPageBreakStatus;
  }
  export interface SectionBasedLayoutCanvasSizeOptions {
    /**
     * The options for a paper canvas of a section-based layout.
     */
    PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
  }
  export interface SectionBasedLayoutConfiguration {
    /**
     * A list of header section configurations.
     */
    HeaderSections: HeaderFooterSectionConfigurationList;
    /**
     * A list of body section configurations.
     */
    BodySections: BodySectionConfigurationList;
    /**
     * A list of footer section configurations.
     */
    FooterSections: HeaderFooterSectionConfigurationList;
    /**
     * The options for the canvas of a section-based layout.
     */
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
  }
  export interface SectionBasedLayoutPaperCanvasSizeOptions {
    /**
     * The paper size that is used to define canvas dimensions.
     */
    PaperSize?: PaperSize;
    /**
     * The paper orientation that is used to define canvas dimensions. Choose one of the following options:   PORTRAIT   LANDSCAPE  
     */
    PaperOrientation?: PaperOrientation;
    /**
     * Defines the spacing between the canvas content and the top, bottom, left, and right edges.
     */
    PaperMargin?: Spacing;
  }
  export interface SectionLayoutConfiguration {
    /**
     * The free-form layout configuration of a section.
     */
    FreeFormLayout: FreeFormSectionLayoutConfiguration;
  }
  export interface SectionPageBreakConfiguration {
    /**
     * The configuration of a page break after a section.
     */
    After?: SectionAfterPageBreak;
  }
  export type SectionPageBreakStatus = "ENABLED"|"DISABLED"|string;
  export interface SectionStyle {
    /**
     * The height of a section. Heights can only be defined for header and footer sections. The default height margin is 0.5 inches. 
     */
    Height?: PixelLength;
    /**
     * The spacing between section content and its top, bottom, left, and right edges. There is no padding by default.
     */
    Padding?: Spacing;
  }
  export type SelectAllValueOptions = "ALL_VALUES"|string;
  export type SelectedFieldList = FieldId[];
  export type SelectedFieldOptions = "ALL_FIELDS"|string;
  export interface SelectedSheetsFilterScopeConfiguration {
    /**
     * The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.
     */
    SheetVisualScopingConfigurations?: SheetVisualScopingConfigurations;
  }
  export type SelectedTooltipType = "BASIC"|"DETAILED"|string;
  export type SensitiveDouble = number;
  export type SensitiveDoubleList = SensitiveDouble[];
  export type SensitiveDoubleObject = number;
  export type SensitiveLong = number;
  export type SensitiveLongList = SensitiveLong[];
  export type SensitiveLongObject = number;
  export type SensitiveString = string;
  export type SensitiveStringList = SensitiveString[];
  export type SensitiveStringObject = string;
  export type SensitiveTimestamp = Date;
  export type SensitiveTimestampList = SensitiveTimestamp[];
  export interface SeriesItem {
    /**
     * The field series item configuration of a line chart.
     */
    FieldSeriesItem?: FieldSeriesItem;
    /**
     * The data field series item configuration of a line chart.
     */
    DataFieldSeriesItem?: DataFieldSeriesItem;
  }
  export type SeriesItemList = SeriesItem[];
  export interface ServiceNowParameters {
    /**
     * URL of the base site.
     */
    SiteBaseUrl: SiteBaseUrl;
  }
  export type SessionLifetimeInMinutes = number;
  export interface SessionTag {
    /**
     * The key for the tag.
     */
    Key: SessionTagKey;
    /**
     * The value that you want to assign the tag.
     */
    Value: SessionTagValue;
  }
  export type SessionTagKey = string;
  export type SessionTagList = SessionTag[];
  export type SessionTagValue = string;
  export interface SetParameterValueConfiguration {
    /**
     * The destination parameter name of the SetParameterValueConfiguration.
     */
    DestinationParameterName: ParameterName;
    Value: DestinationParameterValueConfiguration;
  }
  export type SetParameterValueConfigurationList = SetParameterValueConfiguration[];
  export interface ShapeConditionalFormat {
    /**
     * The conditional formatting for the shape background color of a filled map visual.
     */
    BackgroundColor: ConditionalFormattingColor;
  }
  export interface Sheet {
    /**
     * The unique identifier associated with a sheet.
     */
    SheetId?: ShortRestrictiveResourceId;
    /**
     * The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight console.
     */
    Name?: SheetName;
  }
  export type SheetContentType = "PAGINATED"|"INTERACTIVE"|string;
  export type SheetControlDateTimePickerType = "SINGLE_VALUED"|"DATE_RANGE"|string;
  export interface SheetControlLayout {
    /**
     * The configuration that determines the elements and canvas size options of sheet control.
     */
    Configuration: SheetControlLayoutConfiguration;
  }
  export interface SheetControlLayoutConfiguration {
    /**
     * The configuration that determines the elements and canvas size options of sheet control.
     */
    GridLayout?: GridLayoutConfiguration;
  }
  export type SheetControlLayoutList = SheetControlLayout[];
  export type SheetControlListType = "MULTI_SELECT"|"SINGLE_SELECT"|string;
  export type SheetControlSliderType = "SINGLE_POINT"|"RANGE"|string;
  export type SheetControlTitle = string;
  export interface SheetControlsOption {
    /**
     * Visibility state.
     */
    VisibilityState?: DashboardUIState;
  }
  export interface SheetDefinition {
    /**
     * The unique identifier of a sheet.
     */
    SheetId: ShortRestrictiveResourceId;
    /**
     * The title of the sheet.
     */
    Title?: SheetTitle;
    /**
     * A description of the sheet.
     */
    Description?: SheetDescription;
    /**
     * The name of the sheet. This name is displayed on the sheet's tab in the Amazon QuickSight console.
     */
    Name?: SheetName;
    /**
     * The list of parameter controls that are on a sheet. For more information, see Using a Control with a Parameter in Amazon QuickSight in the Amazon QuickSight User Guide.
     */
    ParameterControls?: ParameterControlList;
    /**
     * The list of filter controls that are on a sheet. For more information, see Adding filter controls to analysis sheets in the Amazon QuickSight User Guide.
     */
    FilterControls?: FilterControlList;
    /**
     * A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.
     */
    Visuals?: VisualList;
    /**
     * The text boxes that are on a sheet.
     */
    TextBoxes?: SheetTextBoxList;
    /**
     * Layouts define how the components of a sheet are arranged. For more information, see Types of layout in the Amazon QuickSight User Guide.
     */
    Layouts?: LayoutList;
    /**
     * The control layouts of the sheet.
     */
    SheetControlLayouts?: SheetControlLayoutList;
    /**
     * The layout content type of the sheet. Choose one of the following options:    PAGINATED: Creates a sheet for a paginated report.    INTERACTIVE: Creates a sheet for an interactive dashboard.  
     */
    ContentType?: SheetContentType;
  }
  export type SheetDefinitionList = SheetDefinition[];
  export type SheetDescription = string;
  export interface SheetElementConfigurationOverrides {
    /**
     * Determines whether or not the overrides are visible. Choose one of the following options:    VISIBLE     HIDDEN   
     */
    Visibility?: Visibility;
  }
  export interface SheetElementRenderingRule {
    /**
     * The expression of the rendering rules of a sheet.
     */
    Expression: Expression;
    /**
     * The override configuration of the rendering rules of a sheet.
     */
    ConfigurationOverrides: SheetElementConfigurationOverrides;
  }
  export type SheetElementRenderingRuleList = SheetElementRenderingRule[];
  export type SheetList = Sheet[];
  export type SheetName = string;
  export interface SheetStyle {
    /**
     * The display options for tiles.
     */
    Tile?: TileStyle;
    /**
     * The layout options for tiles.
     */
    TileLayout?: TileLayoutStyle;
  }
  export interface SheetTextBox {
    /**
     * The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.
     */
    SheetTextBoxId: ShortRestrictiveResourceId;
    /**
     * The content that is displayed in the text box.
     */
    Content?: SheetTextBoxContent;
  }
  export type SheetTextBoxContent = string;
  export type SheetTextBoxList = SheetTextBox[];
  export type SheetTitle = string;
  export interface SheetVisualScopingConfiguration {
    /**
     * The selected sheet that the filter is applied to.
     */
    SheetId: ShortRestrictiveResourceId;
    /**
     * The scope of the applied entities. Choose one of the following options:    ALL_VISUALS     SELECTED_VISUALS   
     */
    Scope: FilterVisualScope;
    /**
     * The selected visuals that the filter is applied to.
     */
    VisualIds?: FilteredVisualsList;
  }
  export type SheetVisualScopingConfigurations = SheetVisualScopingConfiguration[];
  export interface ShortFormatText {
    /**
     * Plain text format.
     */
    PlainText?: ShortPlainText;
    /**
     * Rich text. Examples of rich text include bold, underline, and italics.
     */
    RichText?: ShortRichText;
  }
  export type ShortPlainText = string;
  export type ShortRestrictiveResourceId = string;
  export type ShortRichText = string;
  export interface SignupResponse {
    /**
     * A Boolean that is TRUE if the Amazon QuickSight uses IAM as an authentication method.
     */
    IAMUser?: Boolean;
    /**
     * The user login name for your Amazon QuickSight account.
     */
    userLoginName?: String;
    /**
     * The name of your Amazon QuickSight account.
     */
    accountName?: String;
    /**
     * The type of Active Directory that is being used to authenticate the Amazon QuickSight account. Valid values are SIMPLE_AD, AD_CONNECTOR, and MICROSOFT_AD.
     */
    directoryType?: String;
  }
  export interface SimpleClusterMarker {
    /**
     * The color of the simple cluster marker.
     */
    Color?: HexColor;
  }
  export type SimpleNumericalAggregationFunction = "SUM"|"AVERAGE"|"MIN"|"MAX"|"COUNT"|"DISTINCT_COUNT"|"VAR"|"VARP"|"STDEV"|"STDEVP"|"MEDIAN"|string;
  export type SiteBaseUrl = string;
  export interface SliderControlDisplayOptions {
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
  }
  export type SmallMultiplesDimensionFieldList = DimensionField[];
  export interface SmallMultiplesOptions {
    /**
     * Sets the maximum number of visible rows to display in the grid of small multiples panels. The default value is Auto, which automatically adjusts the rows in the grid to fit the overall layout and size of the given chart.
     */
    MaxVisibleRows?: VisiblePanelRows;
    /**
     * Sets the maximum number of visible columns to display in the grid of small multiples panels. The default is Auto, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.
     */
    MaxVisibleColumns?: VisiblePanelColumns;
    /**
     * Configures the display options for each small multiples panel.
     */
    PanelConfiguration?: PanelConfiguration;
  }
  export interface SnowflakeParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Database.
     */
    Database: Database;
    /**
     * Warehouse.
     */
    Warehouse: Warehouse;
  }
  export type SortDirection = "ASC"|"DESC"|string;
  export interface Spacing {
    /**
     * Define the top spacing.
     */
    Top?: Length;
    /**
     * Define the bottom spacing.
     */
    Bottom?: Length;
    /**
     * Define the left spacing.
     */
    Left?: Length;
    /**
     * Define the right spacing.
     */
    Right?: Length;
  }
  export interface SparkParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
  }
  export type SqlEndpointPath = string;
  export type SqlQuery = string;
  export interface SqlServerParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface SslProperties {
    /**
     * A Boolean option to control whether SSL should be disabled.
     */
    DisableSsl?: Boolean;
  }
  export type Status = "ENABLED"|"DISABLED"|string;
  export type StatusCode = number;
  export type String = string;
  export type StringDefaultValueList = SensitiveStringObject[];
  export interface StringDefaultValues {
    /**
     * The dynamic value of the StringDefaultValues. Different defaults displayed according to users, groups, and values mapping.
     */
    DynamicValue?: DynamicDefaultValue;
    /**
     * The static values of the DecimalDefaultValues.
     */
    StaticValues?: StringDefaultValueList;
  }
  export interface StringFormatConfiguration {
    /**
     * The options that determine the null value format configuration.
     */
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    /**
     * The formatting configuration for numeric strings.
     */
    NumericFormatConfiguration?: NumericFormatConfiguration;
  }
  export type StringList = String[];
  export interface StringParameter {
    /**
     * A display name for a string parameter.
     */
    Name: NonEmptyString;
    /**
     * The values of a string parameter.
     */
    Values: SensitiveStringList;
  }
  export interface StringParameterDeclaration {
    /**
     * The value type determines whether the parameter is a single-value or multi-value parameter.
     */
    ParameterValueType: ParameterValueType;
    /**
     * The name of the parameter that is being declared.
     */
    Name: ParameterName;
    /**
     * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
     */
    DefaultValues?: StringDefaultValues;
    /**
     * The configuration that defines the default value of a String parameter when a value has not been set.
     */
    ValueWhenUnset?: StringValueWhenUnsetConfiguration;
  }
  export type StringParameterList = StringParameter[];
  export interface StringValueWhenUnsetConfiguration {
    /**
     * The built-in options for default values. The value can be one of the following:    RECOMMENDED: The recommended value.    NULL: The NULL value.  
     */
    ValueWhenUnsetOption?: ValueWhenUnsetOption;
    /**
     * A custom value that's used when the value of a parameter isn't set.
     */
    CustomValue?: SensitiveString;
  }
  export interface SubtotalOptions {
    /**
     * The visibility configuration for the subtotal cells.
     */
    TotalsVisibility?: Visibility;
    /**
     * The custom label string for the subtotal cells.
     */
    CustomLabel?: String;
    /**
     * The field level (all, custom, last) for the subtotal cells.
     */
    FieldLevel?: PivotTableSubtotalLevel;
    /**
     * The optional configuration of subtotal cells.
     */
    FieldLevelOptions?: PivotTableFieldSubtotalOptionsList;
    /**
     * The cell styling options for the subtotal cells.
     */
    TotalCellStyle?: TableCellStyle;
    /**
     * The cell styling options for the subtotals of value cells.
     */
    ValueCellStyle?: TableCellStyle;
    /**
     * The cell styling options for the subtotals of header cells.
     */
    MetricHeaderCellStyle?: TableCellStyle;
  }
  export type Suffix = string;
  export interface TableAggregatedFieldWells {
    /**
     * The group by field well for a pivot table. Values are grouped by group by fields.
     */
    GroupBy?: DimensionFieldList;
    /**
     * The values field well for a pivot table. Values are aggregated based on group by fields.
     */
    Values?: MeasureFieldList;
  }
  export interface TableBorderOptions {
    /**
     * The color of a table border.
     */
    Color?: HexColor;
    /**
     * The thickness of a table border.
     */
    Thickness?: TableBorderThickness;
    /**
     * The style (none, solid) of a table border.
     */
    Style?: TableBorderStyle;
  }
  export type TableBorderStyle = "NONE"|"SOLID"|string;
  export type TableBorderThickness = number;
  export interface TableCellConditionalFormatting {
    /**
     * The field ID of the cell for conditional formatting.
     */
    FieldId: FieldId;
    /**
     * The text format of the cell for conditional formatting.
     */
    TextFormat?: TextConditionalFormat;
  }
  export type TableCellImageScalingConfiguration = "FIT_TO_CELL_HEIGHT"|"FIT_TO_CELL_WIDTH"|"DO_NOT_SCALE"|string;
  export interface TableCellImageSizingConfiguration {
    /**
     * The cell scaling configuration of the sizing options for the table image configuration.
     */
    TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration;
  }
  export interface TableCellStyle {
    /**
     * The visibility of the table cells.
     */
    Visibility?: Visibility;
    /**
     * The font configuration of the table cells.
     */
    FontConfiguration?: FontConfiguration;
    /**
     * The text wrap (none, wrap) for the table cells.
     */
    TextWrap?: TextWrap;
    /**
     * The horizontal text alignment (left, center, right, auto) for the table cells.
     */
    HorizontalTextAlignment?: HorizontalTextAlignment;
    /**
     * The vertical text alignment (top, middle, bottom) for the table cells.
     */
    VerticalTextAlignment?: VerticalTextAlignment;
    /**
     * The background color for the table cells.
     */
    BackgroundColor?: HexColor;
    /**
     * The height color for the table cells.
     */
    Height?: TableFieldHeight;
    /**
     * The borders for the table cells.
     */
    Border?: GlobalTableBorderOptions;
  }
  export interface TableConditionalFormatting {
    /**
     * Conditional formatting options for a PivotTableVisual.
     */
    ConditionalFormattingOptions?: TableConditionalFormattingOptionList;
  }
  export interface TableConditionalFormattingOption {
    /**
     * The cell conditional formatting option for a table.
     */
    Cell?: TableCellConditionalFormatting;
    /**
     * The row conditional formatting option for a table.
     */
    Row?: TableRowConditionalFormatting;
  }
  export type TableConditionalFormattingOptionList = TableConditionalFormattingOption[];
  export interface TableConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: TableFieldWells;
    /**
     * The sort configuration for a TableVisual.
     */
    SortConfiguration?: TableSortConfiguration;
    /**
     * The table options for a table visual.
     */
    TableOptions?: TableOptions;
    /**
     * The total options for a table visual.
     */
    TotalOptions?: TotalOptions;
    /**
     * The field options for a table visual.
     */
    FieldOptions?: TableFieldOptions;
    /**
     * The paginated report options for a table visual.
     */
    PaginatedReportOptions?: TablePaginatedReportOptions;
  }
  export interface TableFieldCustomIconContent {
    /**
     * The icon set type (link) of the custom icon content for table URL link content.
     */
    Icon?: TableFieldIconSetType;
  }
  export interface TableFieldCustomTextContent {
    /**
     * The string value of the custom text content for the table URL link content.
     */
    Value?: String;
    /**
     * The font configuration of the custom text content for the table URL link content.
     */
    FontConfiguration: FontConfiguration;
  }
  export type TableFieldHeight = number;
  export type TableFieldIconSetType = "LINK"|string;
  export interface TableFieldImageConfiguration {
    /**
     * The sizing options for the table image configuration.
     */
    SizingOptions?: TableCellImageSizingConfiguration;
  }
  export interface TableFieldLinkConfiguration {
    /**
     * The URL target (new tab, new window, same tab) for the table link configuration.
     */
    Target: URLTargetConfiguration;
    /**
     * The URL content (text, icon) for the table link configuration.
     */
    Content: TableFieldLinkContentConfiguration;
  }
  export interface TableFieldLinkContentConfiguration {
    /**
     * The custom text content (value, font configuration) for the table link content configuration.
     */
    CustomTextContent?: TableFieldCustomTextContent;
    /**
     * The custom icon content for the table link content configuration.
     */
    CustomIconContent?: TableFieldCustomIconContent;
  }
  export interface TableFieldOption {
    /**
     * The field ID for a table field.
     */
    FieldId: FieldId;
    /**
     * The width for a table field.
     */
    Width?: PixelLength;
    /**
     * The custom label for a table field.
     */
    CustomLabel?: CustomLabel;
    /**
     * The visibility of a table field.
     */
    Visibility?: Visibility;
    /**
     * The URL configuration for a table field.
     */
    URLStyling?: TableFieldURLConfiguration;
  }
  export type TableFieldOptionList = TableFieldOption[];
  export interface TableFieldOptions {
    /**
     * The selected field options for the table field options.
     */
    SelectedFieldOptions?: TableFieldOptionList;
    /**
     * The order of field IDs of the field options for a table visual.
     */
    Order?: FieldOrderList;
  }
  export interface TableFieldURLConfiguration {
    /**
     * The link configuration of a table field URL.
     */
    LinkConfiguration?: TableFieldLinkConfiguration;
    /**
     * The image configuration of a table field URL.
     */
    ImageConfiguration?: TableFieldImageConfiguration;
  }
  export interface TableFieldWells {
    /**
     * The aggregated field well for the table.
     */
    TableAggregatedFieldWells?: TableAggregatedFieldWells;
    /**
     * The unaggregated field well for the table.
     */
    TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
  }
  export interface TableOptions {
    /**
     * The orientation (vertical, horizontal) for a table.
     */
    Orientation?: TableOrientation;
    /**
     * The table cell style of a table header.
     */
    HeaderStyle?: TableCellStyle;
    /**
     * The table cell style of table cells.
     */
    CellStyle?: TableCellStyle;
    /**
     * The row alternate color options (widget status, row alternate colors) for a table.
     */
    RowAlternateColorOptions?: RowAlternateColorOptions;
  }
  export type TableOrientation = "VERTICAL"|"HORIZONTAL"|string;
  export interface TablePaginatedReportOptions {
    /**
     * The visibility of printing table overflow across pages.
     */
    VerticalOverflowVisibility?: Visibility;
    /**
     * The visibility of repeating header rows on each page.
     */
    OverflowColumnHeaderVisibility?: Visibility;
  }
  export interface TableRowConditionalFormatting {
    /**
     * The conditional formatting color (solid, gradient) of the background for a table row.
     */
    BackgroundColor?: ConditionalFormattingColor;
    /**
     * The conditional formatting color (solid, gradient) of the text for a table row.
     */
    TextColor?: ConditionalFormattingColor;
  }
  export interface TableSideBorderOptions {
    /**
     * The table border options of the inner vertical border.
     */
    InnerVertical?: TableBorderOptions;
    /**
     * The table border options of the inner horizontal border.
     */
    InnerHorizontal?: TableBorderOptions;
    /**
     * The table border options of the left border.
     */
    Left?: TableBorderOptions;
    /**
     * The table border options of the right border.
     */
    Right?: TableBorderOptions;
    /**
     * The table border options of the top border.
     */
    Top?: TableBorderOptions;
    /**
     * The table border options of the bottom border.
     */
    Bottom?: TableBorderOptions;
  }
  export interface TableSortConfiguration {
    /**
     * The field sort options for rows in the table.
     */
    RowSort?: RowSortList;
    /**
     * The pagination configuration (page size, page number) for the table.
     */
    PaginationConfiguration?: PaginationConfiguration;
  }
  export type TableTotalsPlacement = "START"|"END"|string;
  export type TableTotalsScrollStatus = "PINNED"|"SCROLLED"|string;
  export interface TableUnaggregatedFieldWells {
    /**
     * The values field well for a pivot table. Values are unaggregated for an unaggregated table.
     */
    Values?: UnaggregatedFieldList;
  }
  export interface TableVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: TableConfiguration;
    /**
     * The conditional formatting for a PivotTableVisual.
     */
    ConditionalFormatting?: TableConditionalFormatting;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
  }
  export interface Tag {
    /**
     * Tag key.
     */
    Key: TagKey;
    /**
     * Tag value.
     */
    Value: TagValue;
  }
  export interface TagColumnOperation {
    /**
     * The column that this operation acts on.
     */
    ColumnName: ColumnName;
    /**
     * The dataset column tag, currently only used for geospatial type tagging.  This is not tags for the Amazon Web Services tagging feature. 
     */
    Tags: ColumnTagList;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     */
    ResourceArn: Arn;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type TagValue = string;
  export type TargetVisualList = ShortRestrictiveResourceId[];
  export type TargetVisualOptions = "ALL_VISUALS"|string;
  export interface Template {
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    Arn?: Arn;
    /**
     * The display name of the template.
     */
    Name?: TemplateName;
    /**
     * A structure describing the versions of the template.
     */
    Version?: TemplateVersion;
    /**
     * The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * Time when this was last updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Time when this was created.
     */
    CreatedTime?: Timestamp;
  }
  export interface TemplateAlias {
    /**
     * The display name of the template alias.
     */
    AliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the template alias.
     */
    Arn?: Arn;
    /**
     * The version number of the template alias.
     */
    TemplateVersionNumber?: VersionNumber;
  }
  export type TemplateAliasList = TemplateAlias[];
  export interface TemplateError {
    /**
     * Type of error.
     */
    Type?: TemplateErrorType;
    /**
     * Description of the error type.
     */
    Message?: NonEmptyString;
    /**
     * 
     */
    ViolatedEntities?: EntityList;
  }
  export type TemplateErrorList = TemplateError[];
  export type TemplateErrorType = "SOURCE_NOT_FOUND"|"DATA_SET_NOT_FOUND"|"INTERNAL_FAILURE"|"ACCESS_DENIED"|string;
  export type TemplateName = string;
  export interface TemplateSourceAnalysis {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
    /**
     * A structure containing information about the dataset references used as placeholders in the template.
     */
    DataSetReferences: DataSetReferenceList;
  }
  export interface TemplateSourceEntity {
    /**
     * The source analysis, if it is based on an analysis.
     */
    SourceAnalysis?: TemplateSourceAnalysis;
    /**
     * The source template, if it is based on an template.
     */
    SourceTemplate?: TemplateSourceTemplate;
  }
  export interface TemplateSourceTemplate {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
  }
  export interface TemplateSummary {
    /**
     * A summary of a template.
     */
    Arn?: Arn;
    /**
     * The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * A display name for the template.
     */
    Name?: TemplateName;
    /**
     * A structure containing a list of version numbers for the template summary.
     */
    LatestVersionNumber?: VersionNumber;
    /**
     * The last time that this template was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this template was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type TemplateSummaryList = TemplateSummary[];
  export interface TemplateVersion {
    /**
     * The time that this template version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Errors associated with this template version.
     */
    Errors?: TemplateErrorList;
    /**
     * The version number of the template version.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * Schema of the dataset identified by the placeholder. Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation.
     */
    DataSetConfigurations?: DataSetConfigurationList;
    /**
     * The description of the template.
     */
    Description?: VersionDescription;
    /**
     * The Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
     */
    SourceEntityArn?: Arn;
    /**
     * The ARN of the theme associated with this version of the template.
     */
    ThemeArn?: Arn;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     */
    Sheets?: SheetList;
  }
  export interface TemplateVersionDefinition {
    /**
     * An array of dataset configurations. These configurations define the required columns for each dataset used within a template.
     */
    DataSetConfigurations: DataSetConfigurationList;
    /**
     * An array of sheet definitions for a template.
     */
    Sheets?: SheetDefinitionList;
    /**
     * An array of calculated field definitions for the template.
     */
    CalculatedFields?: CalculatedFields;
    /**
     * An array of parameter declarations for a template.  Parameters are named variables that can transfer a value for use by an action or an object. For more information, see Parameters in Amazon QuickSight in the Amazon QuickSight User Guide. 
     */
    ParameterDeclarations?: ParameterDeclarationList;
    /**
     * Filter definitions for a template. For more information, see Filtering Data in the Amazon QuickSight User Guide. 
     */
    FilterGroups?: FilterGroupList;
    /**
     *  An array of template-level column configurations. Column configurations are used to set default formatting for a column that's used throughout a template. 
     */
    ColumnConfigurations?: ColumnConfigurationList;
    AnalysisDefaults?: AnalysisDefaults;
  }
  export interface TemplateVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the template version.
     */
    Arn?: Arn;
    /**
     * The version number of the template version.
     */
    VersionNumber?: VersionNumber;
    /**
     * The time that this template version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The status of the template version.
     */
    Status?: ResourceStatus;
    /**
     * The description of the template version.
     */
    Description?: VersionDescription;
  }
  export type TemplateVersionSummaryList = TemplateVersionSummary[];
  export interface TeradataParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type TextAreaControlDelimiter = string;
  export interface TextAreaControlDisplayOptions {
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
    /**
     * The configuration of the placeholder options in a text area control.
     */
    PlaceholderOptions?: TextControlPlaceholderOptions;
  }
  export interface TextConditionalFormat {
    /**
     * The conditional formatting for the text background color.
     */
    BackgroundColor?: ConditionalFormattingColor;
    /**
     * The conditional formatting for the text color.
     */
    TextColor?: ConditionalFormattingColor;
    /**
     * The conditional formatting for the icon.
     */
    Icon?: ConditionalFormattingIcon;
  }
  export interface TextControlPlaceholderOptions {
    /**
     * The visibility configuration of the placeholder options in a text control.
     */
    Visibility?: Visibility;
  }
  export interface TextFieldControlDisplayOptions {
    /**
     * The options to configure the title visibility, name, and font size.
     */
    TitleOptions?: LabelOptions;
    /**
     * The configuration of the placeholder options in a text field control.
     */
    PlaceholderOptions?: TextControlPlaceholderOptions;
  }
  export type TextQualifier = "DOUBLE_QUOTE"|"SINGLE_QUOTE"|string;
  export type TextWrap = "NONE"|"WRAP"|string;
  export interface Theme {
    /**
     * The Amazon Resource Name (ARN) of the theme.
     */
    Arn?: Arn;
    /**
     * The name that the user gives to the theme.
     */
    Name?: ThemeName;
    /**
     * The identifier that the user gives to the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
    Version?: ThemeVersion;
    /**
     * The date and time that the theme was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The date and time that the theme was last updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * The type of theme, based on how it was created. Valid values include: QUICKSIGHT and CUSTOM.
     */
    Type?: ThemeType;
  }
  export interface ThemeAlias {
    /**
     * The Amazon Resource Name (ARN) of the theme alias.
     */
    Arn?: Arn;
    /**
     * The display name of the theme alias.
     */
    AliasName?: AliasName;
    /**
     * The version number of the theme alias.
     */
    ThemeVersionNumber?: VersionNumber;
  }
  export type ThemeAliasList = ThemeAlias[];
  export interface ThemeConfiguration {
    /**
     * Color properties that apply to chart data colors.
     */
    DataColorPalette?: DataColorPalette;
    /**
     * Color properties that apply to the UI and to charts, excluding the colors that apply to data. 
     */
    UIColorPalette?: UIColorPalette;
    /**
     * Display options related to sheets.
     */
    Sheet?: SheetStyle;
    Typography?: Typography;
  }
  export interface ThemeError {
    /**
     * The type of error.
     */
    Type?: ThemeErrorType;
    /**
     * The error message.
     */
    Message?: NonEmptyString;
  }
  export type ThemeErrorList = ThemeError[];
  export type ThemeErrorType = "INTERNAL_FAILURE"|string;
  export type ThemeName = string;
  export interface ThemeSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * the display name for the theme.
     */
    Name?: ThemeName;
    /**
     * The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    ThemeId?: ShortRestrictiveResourceId;
    /**
     * The latest version number for the theme. 
     */
    LatestVersionNumber?: VersionNumber;
    /**
     * The date and time that this theme was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last date and time that this theme was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type ThemeSummaryList = ThemeSummary[];
  export type ThemeType = "QUICKSIGHT"|"CUSTOM"|"ALL"|string;
  export interface ThemeVersion {
    /**
     * The version number of the theme.
     */
    VersionNumber?: VersionNumber;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The description of the theme.
     */
    Description?: VersionDescription;
    /**
     * The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All themes initially inherit from a default Amazon QuickSight theme.
     */
    BaseThemeId?: ShortRestrictiveResourceId;
    /**
     * The date and time that this theme version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The theme configuration, which contains all the theme display properties.
     */
    Configuration?: ThemeConfiguration;
    /**
     * Errors associated with the theme.
     */
    Errors?: ThemeErrorList;
    /**
     * The status of the theme version.
     */
    Status?: ResourceStatus;
  }
  export interface ThemeVersionSummary {
    /**
     * The version number of the theme version.
     */
    VersionNumber?: VersionNumber;
    /**
     * The Amazon Resource Name (ARN) of the theme version.
     */
    Arn?: Arn;
    /**
     * The description of the theme version.
     */
    Description?: VersionDescription;
    /**
     * The date and time that this theme version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The status of the theme version.
     */
    Status?: ResourceStatus;
  }
  export type ThemeVersionSummaryList = ThemeVersionSummary[];
  export interface ThousandSeparatorOptions {
    /**
     * Determines the thousands separator symbol.
     */
    Symbol?: NumericSeparatorSymbol;
    /**
     * Determines the visibility of the thousands separator.
     */
    Visibility?: Visibility;
  }
  export interface TileLayoutStyle {
    /**
     * The gutter settings that apply between tiles. 
     */
    Gutter?: GutterStyle;
    /**
     * The margin settings that apply around the outside edge of sheets.
     */
    Margin?: MarginStyle;
  }
  export interface TileStyle {
    /**
     * The border around a tile.
     */
    Border?: BorderStyle;
  }
  export interface TimeBasedForecastProperties {
    /**
     * The periods forward setup of a forecast computation.
     */
    PeriodsForward?: PeriodsForward;
    /**
     * The periods backward setup of a forecast computation.
     */
    PeriodsBackward?: PeriodsBackward;
    /**
     * The upper boundary setup of a forecast computation.
     */
    UpperBoundary?: Double;
    /**
     * The lower boundary setup of a forecast computation.
     */
    LowerBoundary?: Double;
    /**
     * The prediction interval setup of a forecast computation.
     */
    PredictionInterval?: PredictionInterval;
    /**
     * The seasonality setup of a forecast computation. Choose one of the following options:    NULL: The input is set to NULL.    NON_NULL: The input is set to a custom value.  
     */
    Seasonality?: Seasonality;
  }
  export interface TimeEqualityFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The value of a TimeEquality filter. This field is mutually exclusive to ParameterName.
     */
    Value?: Timestamp;
    /**
     * The parameter whose value should be used for the filter value. This field is mutually exclusive to Value.
     */
    ParameterName?: ParameterName;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity?: TimeGranularity;
  }
  export type TimeGranularity = "YEAR"|"QUARTER"|"MONTH"|"WEEK"|"DAY"|"HOUR"|"MINUTE"|"SECOND"|"MILLISECOND"|string;
  export interface TimeRangeDrillDownFilter {
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The minimum value for the filter value range.
     */
    RangeMinimum: Timestamp;
    /**
     * The maximum value for the filter value range.
     */
    RangeMaximum: Timestamp;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity: TimeGranularity;
  }
  export interface TimeRangeFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * Determines whether the minimum value in the filter value range should be included in the filtered results.
     */
    IncludeMinimum?: Boolean;
    /**
     * Determines whether the maximum value in the filter value range should be included in the filtered results.
     */
    IncludeMaximum?: Boolean;
    /**
     * The minimum value for the filter value range.
     */
    RangeMinimumValue?: TimeRangeFilterValue;
    /**
     * The maximum value for the filter value range.
     */
    RangeMaximumValue?: TimeRangeFilterValue;
    /**
     * This option determines how null values should be treated when filtering data.    ALL_VALUES: Include null values in filtered results.    NULLS_ONLY: Only include null values in filtered results.    NON_NULLS_ONLY: Exclude null values from filtered results.  
     */
    NullOption: FilterNullOption;
    /**
     * The exclude period of the time range filter.
     */
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity?: TimeGranularity;
  }
  export interface TimeRangeFilterValue {
    /**
     * The static input value.
     */
    StaticValue?: Timestamp;
    /**
     * The rolling date input value.
     */
    RollingDate?: RollingDateConfiguration;
    /**
     * The parameter type input value.
     */
    Parameter?: ParameterName;
  }
  export type Timestamp = Date;
  export interface TooltipItem {
    /**
     * The tooltip item for the fields.
     */
    FieldTooltipItem?: FieldTooltipItem;
    /**
     * The tooltip item for the columns that are not part of a field well.
     */
    ColumnTooltipItem?: ColumnTooltipItem;
  }
  export type TooltipItemList = TooltipItem[];
  export interface TooltipOptions {
    /**
     * Determines whether or not the tooltip is visible.
     */
    TooltipVisibility?: Visibility;
    /**
     * The selected type for the tooltip. Choose one of the following options:    BASIC: A basic tooltip.    DETAILED: A detailed tooltip.  
     */
    SelectedTooltipType?: SelectedTooltipType;
    /**
     * The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.
     */
    FieldBasedTooltip?: FieldBasedTooltip;
  }
  export type TooltipTitleType = "NONE"|"PRIMARY_VALUE"|string;
  export type TopBottomComputationType = "TOP"|"BOTTOM"|string;
  export interface TopBottomFilter {
    /**
     * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
     */
    FilterId: ShortRestrictiveResourceId;
    /**
     * The column that the filter is applied to.
     */
    Column: ColumnIdentifier;
    /**
     * The number of items to include in the top bottom filter results.
     */
    Limit?: Integer;
    /**
     * The aggregation and sort configuration of the top bottom filter.
     */
    AggregationSortConfigurations: AggregationSortConfigurationList;
    /**
     * The level of time precision that is used to aggregate DateTime values.
     */
    TimeGranularity?: TimeGranularity;
    /**
     * The parameter whose value should be used for the filter value.
     */
    ParameterName?: ParameterName;
  }
  export interface TopBottomMoversComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The time field that is used in a computation.
     */
    Time: DimensionField;
    /**
     * The category field that is used in a computation.
     */
    Category: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The mover size setup of the top and bottom movers computation.
     */
    MoverSize?: TopBottomMoversComputationMoverSize;
    /**
     * The sort order setup of the top and bottom movers computation.
     */
    SortOrder?: TopBottomSortOrder;
    /**
     * The computation type. Choose from the following options:   TOP: Top movers computation.   BOTTOM: Bottom movers computation.  
     */
    Type: TopBottomComputationType;
  }
  export type TopBottomMoversComputationMoverSize = number;
  export interface TopBottomRankedComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The category field that is used in a computation.
     */
    Category: DimensionField;
    /**
     * The value field that is used in a computation.
     */
    Value?: MeasureField;
    /**
     * The result size of a top and bottom ranked computation.
     */
    ResultSize?: TopBottomRankedComputationResultSize;
    /**
     * The computation type. Choose one of the following options:   TOP: A top ranked computation.   BOTTOM: A bottom ranked computation.  
     */
    Type: TopBottomComputationType;
  }
  export type TopBottomRankedComputationResultSize = number;
  export type TopBottomSortOrder = "PERCENT_DIFFERENCE"|"ABSOLUTE_DIFFERENCE"|string;
  export interface TotalAggregationComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The value field that is used in a computation.
     */
    Value: MeasureField;
  }
  export interface TotalOptions {
    /**
     * The visibility configuration for the total cells.
     */
    TotalsVisibility?: Visibility;
    /**
     * The placement (start, end) for the total cells.
     */
    Placement?: TableTotalsPlacement;
    /**
     * The scroll status (pinned, scrolled) for the total cells.
     */
    ScrollStatus?: TableTotalsScrollStatus;
    /**
     * The custom label string for the total cells.
     */
    CustomLabel?: String;
    /**
     * Cell styling options for the total cells.
     */
    TotalCellStyle?: TableCellStyle;
  }
  export interface TransformOperation {
    /**
     * An operation that projects columns. Operations that come after a projection can only refer to projected columns.
     */
    ProjectOperation?: ProjectOperation;
    /**
     * An operation that filters rows based on some condition.
     */
    FilterOperation?: FilterOperation;
    /**
     * An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
     */
    CreateColumnsOperation?: CreateColumnsOperation;
    /**
     * An operation that renames a column.
     */
    RenameColumnOperation?: RenameColumnOperation;
    /**
     * A transform operation that casts a column to a different type.
     */
    CastColumnTypeOperation?: CastColumnTypeOperation;
    /**
     * An operation that tags a column with additional information.
     */
    TagColumnOperation?: TagColumnOperation;
    UntagColumnOperation?: UntagColumnOperation;
  }
  export type TransformOperationList = TransformOperation[];
  export interface TreeMapAggregatedFieldWells {
    /**
     * The group by field well of a tree map. Values are grouped based on group by fields.
     */
    Groups?: TreeMapDimensionFieldList;
    /**
     * The size field well of a tree map. Values are aggregated based on group by fields.
     */
    Sizes?: TreeMapMeasureFieldList;
    /**
     * The color field well of a tree map. Values are grouped by aggregations based on group by fields.
     */
    Colors?: TreeMapMeasureFieldList;
  }
  export interface TreeMapConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: TreeMapFieldWells;
    /**
     * The sort configuration of a tree map.
     */
    SortConfiguration?: TreeMapSortConfiguration;
    /**
     * The label options (label text, label visibility) of the groups that are displayed in a tree map.
     */
    GroupLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options (label text, label visibility) of the sizes that are displayed in a tree map.
     */
    SizeLabelOptions?: ChartAxisLabelOptions;
    /**
     * The label options (label text, label visibility) for the colors displayed in a tree map.
     */
    ColorLabelOptions?: ChartAxisLabelOptions;
    /**
     * The color options (gradient color, point of divergence) of a tree map.
     */
    ColorScale?: ColorScale;
    /**
     * The legend display setup of the visual.
     */
    Legend?: LegendOptions;
    /**
     * The options that determine if visual data labels are displayed.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The tooltip display setup of the visual.
     */
    Tooltip?: TooltipOptions;
  }
  export type TreeMapDimensionFieldList = DimensionField[];
  export interface TreeMapFieldWells {
    /**
     * The aggregated field wells of a tree map.
     */
    TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
  }
  export type TreeMapMeasureFieldList = MeasureField[];
  export interface TreeMapSortConfiguration {
    /**
     * The sort configuration of group by fields.
     */
    TreeMapSort?: FieldSortOptionsList;
    /**
     * The limit on the number of groups that are displayed.
     */
    TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
  }
  export interface TreeMapVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: TreeMapConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface TrendArrowOptions {
    /**
     * The visibility of the trend arrows.
     */
    Visibility?: Visibility;
  }
  export interface TwitterParameters {
    /**
     * Twitter query string.
     */
    Query: Query;
    /**
     * Maximum number of rows to query Twitter.
     */
    MaxRows: PositiveInteger;
  }
  export type TypeCastFormat = string;
  export interface Typography {
    /**
     * Determines the list of font families.
     */
    FontFamilies?: FontList;
  }
  export interface UIColorPalette {
    /**
     * The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
     */
    PrimaryForeground?: HexColor;
    /**
     * The background color that applies to visuals and other high emphasis UI.
     */
    PrimaryBackground?: HexColor;
    /**
     * The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
     */
    SecondaryForeground?: HexColor;
    /**
     * The background color that applies to the sheet background and sheet controls.
     */
    SecondaryBackground?: HexColor;
    /**
     * This color is that applies to selected states and buttons.
     */
    Accent?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the accent color.
     */
    AccentForeground?: HexColor;
    /**
     * The color that applies to error messages.
     */
    Danger?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the error color.
     */
    DangerForeground?: HexColor;
    /**
     * This color that applies to warning and informational messages.
     */
    Warning?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the warning color.
     */
    WarningForeground?: HexColor;
    /**
     * The color that applies to success messages, for example the check mark for a successful download.
     */
    Success?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the success color.
     */
    SuccessForeground?: HexColor;
    /**
     * The color that applies to the names of fields that are identified as dimensions.
     */
    Dimension?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the dimension color.
     */
    DimensionForeground?: HexColor;
    /**
     * The color that applies to the names of fields that are identified as measures.
     */
    Measure?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the measure color.
     */
    MeasureForeground?: HexColor;
  }
  export type URLOperationTemplate = string;
  export type URLTargetConfiguration = "NEW_TAB"|"NEW_WINDOW"|"SAME_TAB"|string;
  export interface UnaggregatedField {
    /**
     * The custom field ID.
     */
    FieldId: FieldId;
    /**
     * The column that is used in the UnaggregatedField.
     */
    Column: ColumnIdentifier;
    /**
     * The format configuration of the field.
     */
    FormatConfiguration?: FormatConfiguration;
  }
  export type UnaggregatedFieldList = UnaggregatedField[];
  export type UnicodeIcon = string;
  export interface UniqueValuesComputation {
    /**
     * The ID for a computation.
     */
    ComputationId: ShortRestrictiveResourceId;
    /**
     * The name of a computation.
     */
    Name?: String;
    /**
     * The category field that is used in a computation.
     */
    Category: DimensionField;
  }
  export type UnlimitedPixelLength = string;
  export interface UntagColumnOperation {
    /**
     * The column that this operation acts on.
     */
    ColumnName: ColumnName;
    /**
     * The column tags to remove from this column.
     */
    TagNames: ColumnTagNames;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to untag.
     */
    ResourceArn: Arn;
    /**
     * The keys of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateAccountCustomizationRequest {
    /**
     * The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace that you want to update Amazon QuickSight customizations for.
     */
    Namespace?: Namespace;
    /**
     * The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. 
     */
    AccountCustomization: AccountCustomization;
  }
  export interface UpdateAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) for the updated customization for this Amazon Web Services account.
     */
    Arn?: Arn;
    /**
     * The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations for.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * The namespace associated with the customization that you're updating.
     */
    Namespace?: Namespace;
    /**
     * The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. 
     */
    AccountCustomization?: AccountCustomization;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateAccountSettingsRequest {
    /**
     * The ID for the Amazon Web Services account that contains the Amazon QuickSight settings that you want to list.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The default namespace for this Amazon Web Services account. Currently, the default is default. Identity and Access Management (IAM) users that register for the first time with Amazon QuickSight provide an email address that becomes associated with the default namespace. 
     */
    DefaultNamespace: Namespace;
    /**
     * The email address that you want Amazon QuickSight to send notifications to regarding your Amazon Web Services account or Amazon QuickSight subscription.
     */
    NotificationEmail?: String;
    /**
     * A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A True value doesn't allow the account to be deleted and results in an error message if a user tries to make a DeleteAccountSubscription request. A False value will allow the account to be deleted.
     */
    TerminationProtectionEnabled?: Boolean;
  }
  export interface UpdateAccountSettingsResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateAnalysisPermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis whose permissions you're updating. You must be using the Amazon Web Services account that the analysis is in.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL.
     */
    AnalysisId: ShortRestrictiveResourceId;
    /**
     * A structure that describes the permissions to add and the principal to add them to.
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * A structure that describes the permissions to remove and the principal to remove them from.
     */
    RevokePermissions?: UpdateResourcePermissionList;
  }
  export interface UpdateAnalysisPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the analysis that you updated.
     */
    AnalysisArn?: Arn;
    /**
     * The ID of the analysis that you updated permissions for.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateAnalysisRequest {
    /**
     * The ID of the Amazon Web Services account that contains the analysis that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the analysis that you're updating. This ID displays in the URL of the analysis.
     */
    AnalysisId: ShortRestrictiveResourceId;
    /**
     * A descriptive name for the analysis that you're updating. This name displays for the analysis in the Amazon QuickSight console.
     */
    Name: AnalysisName;
    /**
     * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values. 
     */
    Parameters?: Parameters;
    /**
     * A source entity to use for the analysis that you're updating. This metadata structure contains details that describe a source template and one or more datasets.
     */
    SourceEntity?: AnalysisSourceEntity;
    /**
     * The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the Amazon QuickSight console, make sure that you have access to it.
     */
    ThemeArn?: Arn;
    /**
     * The definition of an analysis. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: AnalysisDefinition;
  }
  export interface UpdateAnalysisResponse {
    /**
     * The ARN of the analysis that you're updating.
     */
    Arn?: Arn;
    /**
     * The ID of the analysis.
     */
    AnalysisId?: ShortRestrictiveResourceId;
    /**
     * The update status of the last update that was made to the analysis.
     */
    UpdateStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateDashboardPermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard whose permissions you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The permissions that you want to grant on this resource.
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * The permissions that you want to revoke from this resource.
     */
    RevokePermissions?: UpdateResourcePermissionList;
    /**
     * Grants link permissions to all users in a defined namespace.
     */
    GrantLinkPermissions?: UpdateLinkPermissionList;
    /**
     * Revokes link permissions from all users in a defined namespace.
     */
    RevokeLinkPermissions?: UpdateLinkPermissionList;
  }
  export interface UpdateDashboardPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * Information about the permissions on the dashboard.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * Updates the permissions of a shared link to an Amazon QuickSight dashboard.
     */
    LinkSharingConfiguration?: LinkSharingConfiguration;
  }
  export interface UpdateDashboardPublishedVersionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The version number of the dashboard.
     */
    VersionNumber: VersionNumber;
  }
  export interface UpdateDashboardPublishedVersionResponse {
    /**
     * The ID for the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateDashboardRequest {
    /**
     * The ID of the Amazon Web Services account that contains the dashboard that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: ShortRestrictiveResourceId;
    /**
     * The display name of the dashboard.
     */
    Name: DashboardName;
    /**
     * The entity that you are using as a source when you update the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a SourceTemplate entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the  CreateTemplate  API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. 
     */
    SourceEntity?: DashboardSourceEntity;
    /**
     * A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values.
     */
    Parameters?: Parameters;
    /**
     * A description for the first version of the dashboard being created.
     */
    VersionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, Amazon QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.   
     */
    DashboardPublishOptions?: DashboardPublishOptions;
    /**
     * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard.
     */
    ThemeArn?: Arn;
    /**
     * The definition of a dashboard. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: DashboardVersionDefinition;
  }
  export interface UpdateDashboardResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number.
     */
    VersionArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: ShortRestrictiveResourceId;
    /**
     * The creation status of the request.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateDataSetPermissionsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset whose permissions you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
    /**
     * The resource permissions that you want to grant to the dataset.
     */
    GrantPermissions?: ResourcePermissionList;
    /**
     * The resource permissions that you want to revoke from the dataset.
     */
    RevokePermissions?: ResourcePermissionList;
  }
  export interface UpdateDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DataSetArn?: Arn;
    /**
     * The ID for the dataset whose permissions you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSetRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId: ResourceId;
    /**
     * The display name for the dataset.
     */
    Name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     */
    FieldFolders?: FieldFolderMap;
    /**
     * The row-level security configuration for the data you want to create.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.
     */
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     */
    ColumnLevelPermissionRules?: ColumnLevelPermissionRuleList;
    DataSetUsageConfiguration?: DataSetUsageConfiguration;
  }
  export interface UpdateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSourcePermissionsRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. 
     */
    DataSourceId: ResourceId;
    /**
     * A list of resource permissions that you want to grant on the data source.
     */
    GrantPermissions?: ResourcePermissionList;
    /**
     * A list of resource permissions that you want to revoke on the data source.
     */
    RevokePermissions?: ResourcePermissionList;
  }
  export interface UpdateDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSourceRequest {
    /**
     * The Amazon Web Services account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. 
     */
    DataSourceId: ResourceId;
    /**
     * A display name for the data source.
     */
    Name: ResourceName;
    /**
     * The parameters that Amazon QuickSight uses to connect to your underlying source.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * The credentials that Amazon QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
     */
    Credentials?: DataSourceCredentials;
    /**
     * Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
  }
  export interface UpdateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
     */
    DataSourceId?: ResourceId;
    /**
     * The update status of the data source's last update.
     */
    UpdateStatus?: ResourceStatus;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateFolderPermissionsRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder to update.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The permissions that you want to grant on a resource.
     */
    GrantPermissions?: ResourcePermissionList;
    /**
     * The permissions that you want to revoke from a resource.
     */
    RevokePermissions?: ResourcePermissionList;
  }
  export interface UpdateFolderPermissionsResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the folder.
     */
    Arn?: Arn;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * Information about the permissions for the folder.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateFolderRequest {
    /**
     * The ID for the Amazon Web Services account that contains the folder to update.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the folder.
     */
    FolderId: RestrictiveResourceId;
    /**
     * The name of the folder.
     */
    Name: FolderName;
  }
  export interface UpdateFolderResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the folder.
     */
    Arn?: Arn;
    /**
     * The ID of the folder.
     */
    FolderId?: RestrictiveResourceId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateGroupRequest {
    /**
     * The name of the group that you want to update.
     */
    GroupName: GroupName;
    /**
     * The description for the group that you want to update.
     */
    Description?: GroupDescription;
    /**
     * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace of the group that you want to update.
     */
    Namespace: Namespace;
  }
  export interface UpdateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateIAMPolicyAssignmentRequest {
    /**
     * The ID of the Amazon Web Services account that contains the IAM policy assignment. 
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule. This name must be unique within an Amazon Web Services account.
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace of the assignment.
     */
    Namespace: Namespace;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The Amazon QuickSight users, groups, or both that you want to assign the policy to.
     */
    Identities?: IdentityMap;
  }
  export interface UpdateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment or rule.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID of the assignment.
     */
    AssignmentId?: String;
    /**
     * The ARN for the IAM policy applied to the Amazon QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The Amazon QuickSight users, groups, or both that the IAM policy is assigned to.
     */
    Identities?: IdentityMap;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateIpRestrictionRequest {
    /**
     * The ID of the Amazon Web Services account that contains the IP rules.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A map that describes the updated IP rules with CIDR ranges and descriptions.
     */
    IpRestrictionRuleMap?: IpRestrictionRuleMap;
    /**
     * A value that specifies whether IP rules are turned on.
     */
    Enabled?: NullableBoolean;
  }
  export interface UpdateIpRestrictionResponse {
    /**
     * The ID of the Amazon Web Services account that contains the IP rules.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request. 
     */
    Status?: StatusCode;
  }
  export type UpdateLinkPermissionList = ResourcePermission[];
  export interface UpdatePublicSharingSettingsRequest {
    /**
     * The Amazon Web Services account ID associated with your Amazon QuickSight subscription.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account.
     */
    PublicSharingEnabled?: Boolean;
  }
  export interface UpdatePublicSharingSettingsResponse {
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type UpdateResourcePermissionList = ResourcePermission[];
  export interface UpdateTemplateAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template alias that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName: AliasName;
    /**
     * The version number of the template.
     */
    TemplateVersionNumber: VersionNumber;
  }
  export interface UpdateTemplateAliasResponse {
    /**
     * The template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateTemplatePermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * A list of resource permissions to be granted on the template. 
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * A list of resource permissions to be revoked from the template. 
     */
    RevokePermissions?: UpdateResourcePermissionList;
  }
  export interface UpdateTemplatePermissionsResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    TemplateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateTemplateRequest {
    /**
     * The ID of the Amazon Web Services account that contains the template that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: ShortRestrictiveResourceId;
    /**
     * The entity that you are using as a source when you update the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region;.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. 
     */
    SourceEntity?: TemplateSourceEntity;
    /**
     * A description of the current template version that is being updated. Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field.
     */
    VersionDescription?: VersionDescription;
    /**
     * The name for the template.
     */
    Name?: TemplateName;
    /**
     * The definition of a template. A definition is the data model of all features in a Dashboard, Template, or Analysis.
     */
    Definition?: TemplateVersionDefinition;
  }
  export interface UpdateTemplateResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the template.
     */
    Arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     */
    VersionArn?: Arn;
    /**
     * The creation status of the template.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateThemeAliasRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme alias that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The name of the theme alias that you want to update.
     */
    AliasName: AliasName;
    /**
     * The version number of the theme that the alias should reference.
     */
    ThemeVersionNumber: VersionNumber;
  }
  export interface UpdateThemeAliasResponse {
    /**
     * Information about the theme alias.
     */
    ThemeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateThemePermissionsRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * A list of resource permissions to be granted for the theme.
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * A list of resource permissions to be revoked from the theme.
     */
    RevokePermissions?: UpdateResourcePermissionList;
  }
  export interface UpdateThemePermissionsResponse {
    /**
     * The ID for the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the theme.
     */
    ThemeArn?: Arn;
    /**
     * The resulting list of resource permissions for the theme.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateThemeRequest {
    /**
     * The ID of the Amazon Web Services account that contains the theme that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     */
    ThemeId: ShortRestrictiveResourceId;
    /**
     * The name for the theme.
     */
    Name?: ThemeName;
    /**
     * The theme ID, defined by Amazon QuickSight, that a custom theme inherits from. All themes initially inherit from a default Amazon QuickSight theme.
     */
    BaseThemeId: ShortRestrictiveResourceId;
    /**
     * A description of the theme version that you're updating Every time that you call UpdateTheme, you create a new version of the theme. Each version of the theme maintains a description of the version in VersionDescription.
     */
    VersionDescription?: VersionDescription;
    /**
     * The theme configuration, which contains the theme display properties.
     */
    Configuration?: ThemeConfiguration;
  }
  export interface UpdateThemeResponse {
    /**
     * The ID for the theme.
     */
    ThemeId?: ShortRestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the theme.
     */
    Arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) for the new version of the theme.
     */
    VersionArn?: Arn;
    /**
     * The creation status of the theme.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateUserRequest {
    /**
     * The Amazon QuickSight user name that you want to update.
     */
    UserName: UserName;
    /**
     * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The email address of the user that you want to update.
     */
    Email: String;
    /**
     * The Amazon QuickSight role of the user. The role can be one of the following default security cohorts:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.   The name of the Amazon QuickSight role is invisible to the user except for the console screens dealing with permissions.
     */
    Role: UserRole;
    /**
     * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Amazon QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a Amazon QuickSight user.  Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Amazon QuickSight users to one of the default security cohorts in Amazon QuickSight (admin, author, reader). This feature is available only to Amazon QuickSight Enterprise edition subscriptions.
     */
    CustomPermissionsName?: RoleName;
    /**
     * A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.
     */
    UnapplyCustomPermissions?: Boolean;
    /**
     * The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.    COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the COGNITO provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.    CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider. When choosing CUSTOM_OIDC type, use the CustomFederationProviderUrl parameter to provide the custom OIDC provider URL.    NONE: This clears all the previously saved external login information for a user. Use the  DescribeUser  API operation to check the external login information.  
     */
    ExternalLoginFederationProviderType?: String;
    /**
     * The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should only be used when ExternalLoginFederationProviderType parameter is set to CUSTOM_OIDC.
     */
    CustomFederationProviderUrl?: String;
    /**
     * The identity ID for a user in the external login provider.
     */
    ExternalLoginId?: String;
  }
  export interface UpdateUserResponse {
    /**
     * The Amazon QuickSight user.
     */
    User?: User;
    /**
     * The Amazon Web Services request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UploadSettings {
    /**
     * File format.
     */
    Format?: FileFormat;
    /**
     * A row number to start reading data from.
     */
    StartFromRow?: PositiveInteger;
    /**
     * Whether the file has a header row, or the files each have a header row.
     */
    ContainsHeader?: Boolean;
    /**
     * Text qualifier.
     */
    TextQualifier?: TextQualifier;
    /**
     * The delimiter between values in the file.
     */
    Delimiter?: Delimiter;
  }
  export interface User {
    /**
     * The Amazon Resource Name (ARN) for the user.
     */
    Arn?: Arn;
    /**
     * The user's user name. This value is required if you are registering a user that will be managed in Amazon QuickSight. In the output, the value for UserName is N/A when the value for IdentityType is IAM and the corresponding IAM user is deleted.
     */
    UserName?: UserName;
    /**
     * The user's email address.
     */
    Email?: String;
    /**
     * The Amazon QuickSight role for the user. The user role can be one of the following:.    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.  
     */
    Role?: UserRole;
    /**
     * The type of identity authentication used by the user.
     */
    IdentityType?: IdentityType;
    /**
     * The active status of user. When you create an Amazon QuickSight user that’s not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.
     */
    Active?: Boolean;
    /**
     * The principal ID of the user.
     */
    PrincipalId?: String;
    /**
     * The custom permissions profile associated with this user.
     */
    CustomPermissionsName?: RoleName;
    /**
     * The type of supported external login provider that provides identity to let the user federate into Amazon QuickSight with an associated IAM role. The type can be one of the following.    COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com.    CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider.  
     */
    ExternalLoginFederationProviderType?: String;
    /**
     * The URL of the external login provider.
     */
    ExternalLoginFederationProviderUrl?: String;
    /**
     * The identity ID for the user in the external login provider.
     */
    ExternalLoginId?: String;
  }
  export type UserList = User[];
  export type UserName = string;
  export type UserRole = "ADMIN"|"AUTHOR"|"READER"|"RESTRICTED_AUTHOR"|"RESTRICTED_READER"|string;
  export type Username = string;
  export type ValueWhenUnsetOption = "RECOMMENDED_VALUE"|"NULL"|string;
  export type VersionDescription = string;
  export type VersionNumber = number;
  export type VerticalTextAlignment = "TOP"|"MIDDLE"|"BOTTOM"|string;
  export type Visibility = "HIDDEN"|"VISIBLE"|string;
  export type VisiblePanelColumns = number;
  export type VisiblePanelRows = number;
  export interface VisibleRangeOptions {
    /**
     * The percent range in the visible range.
     */
    PercentRange?: PercentVisibleRange;
  }
  export interface Visual {
    /**
     * A table visual. For more information, see Using tables as visuals in the Amazon QuickSight User Guide.
     */
    TableVisual?: TableVisual;
    /**
     * A pivot table. For more information, see Using pivot tables in the Amazon QuickSight User Guide.
     */
    PivotTableVisual?: PivotTableVisual;
    /**
     * A bar chart. For more information, see Using bar charts in the Amazon QuickSight User Guide.
     */
    BarChartVisual?: BarChartVisual;
    /**
     * A key performance indicator (KPI). For more information, see Using KPIs in the Amazon QuickSight User Guide.
     */
    KPIVisual?: KPIVisual;
    /**
     * A pie or donut chart. For more information, see Using pie charts in the Amazon QuickSight User Guide.
     */
    PieChartVisual?: PieChartVisual;
    /**
     * A gauge chart. For more information, see Using gauge charts in the Amazon QuickSight User Guide.
     */
    GaugeChartVisual?: GaugeChartVisual;
    /**
     * A line chart. For more information, see Using line charts in the Amazon QuickSight User Guide.
     */
    LineChartVisual?: LineChartVisual;
    /**
     * A heat map. For more information, see Using heat maps in the Amazon QuickSight User Guide.
     */
    HeatMapVisual?: HeatMapVisual;
    /**
     * A tree map. For more information, see Using tree maps in the Amazon QuickSight User Guide.
     */
    TreeMapVisual?: TreeMapVisual;
    /**
     * A geospatial map or a points on map visual. For more information, see Creating point maps in the Amazon QuickSight User Guide.
     */
    GeospatialMapVisual?: GeospatialMapVisual;
    /**
     * A filled map. For more information, see Creating filled maps in the Amazon QuickSight User Guide.
     */
    FilledMapVisual?: FilledMapVisual;
    /**
     * A funnel chart. For more information, see Using funnel charts in the Amazon QuickSight User Guide.
     */
    FunnelChartVisual?: FunnelChartVisual;
    /**
     * A scatter plot. For more information, see Using scatter plots in the Amazon QuickSight User Guide.
     */
    ScatterPlotVisual?: ScatterPlotVisual;
    /**
     * A combo chart. For more information, see Using combo charts in the Amazon QuickSight User Guide.
     */
    ComboChartVisual?: ComboChartVisual;
    /**
     * A box plot. For more information, see Using box plots in the Amazon QuickSight User Guide.
     */
    BoxPlotVisual?: BoxPlotVisual;
    /**
     * A waterfall chart. For more information, see Using waterfall charts in the Amazon QuickSight User Guide.
     */
    WaterfallVisual?: WaterfallVisual;
    /**
     * A histogram. For more information, see Using histograms in the Amazon QuickSight User Guide.
     */
    HistogramVisual?: HistogramVisual;
    /**
     * A word cloud. For more information, see Using word clouds in the Amazon QuickSight User Guide.
     */
    WordCloudVisual?: WordCloudVisual;
    /**
     * An insight visual. For more information, see Working with insights in the Amazon QuickSight User Guide.
     */
    InsightVisual?: InsightVisual;
    /**
     * A sankey diagram. For more information, see Using Sankey diagrams in the Amazon QuickSight User Guide.
     */
    SankeyDiagramVisual?: SankeyDiagramVisual;
    /**
     * A visual that contains custom content. For more information, see Using custom visual content in the Amazon QuickSight User Guide.
     */
    CustomContentVisual?: CustomContentVisual;
    /**
     * An empty visual.
     */
    EmptyVisual?: EmptyVisual;
  }
  export interface VisualCustomAction {
    /**
     * The ID of the VisualCustomAction.
     */
    CustomActionId: ShortRestrictiveResourceId;
    /**
     * The name of the VisualCustomAction.
     */
    Name: VisualCustomActionName;
    /**
     * The status of the VisualCustomAction.
     */
    Status?: WidgetStatus;
    /**
     * The trigger of the VisualCustomAction. Valid values are defined as follows:    DATA_POINT_CLICK: Initiates a custom action by a left pointer click on a data point.    DATA_POINT_MENU: Initiates a custom action by right pointer click from the menu.  
     */
    Trigger: VisualCustomActionTrigger;
    /**
     * A list of VisualCustomActionOperations. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
     */
    ActionOperations: VisualCustomActionOperationList;
  }
  export type VisualCustomActionList = VisualCustomAction[];
  export type VisualCustomActionName = string;
  export interface VisualCustomActionOperation {
    /**
     * The filter operation that filters data included in a visual or in an entire sheet.
     */
    FilterOperation?: CustomActionFilterOperation;
    /**
     * The navigation operation that navigates between different sheets in the same analysis.
     */
    NavigationOperation?: CustomActionNavigationOperation;
    /**
     * The URL operation that opens a link to another webpage.
     */
    URLOperation?: CustomActionURLOperation;
    /**
     * The set parameter operation that sets parameters in custom action.
     */
    SetParametersOperation?: CustomActionSetParametersOperation;
  }
  export type VisualCustomActionOperationList = VisualCustomActionOperation[];
  export type VisualCustomActionTrigger = "DATA_POINT_CLICK"|"DATA_POINT_MENU"|string;
  export type VisualList = Visual[];
  export interface VisualPalette {
    /**
     * The chart color options for the visual palette.
     */
    ChartColor?: HexColor;
    /**
     * The color map options for the visual palette.
     */
    ColorMap?: DataPathColorList;
  }
  export interface VisualSubtitleLabelOptions {
    /**
     * The visibility of the subtitle label.
     */
    Visibility?: Visibility;
    /**
     * The long text format of the subtitle label, such as plain text or rich text.
     */
    FormatText?: LongFormatText;
  }
  export interface VisualTitleLabelOptions {
    /**
     * The visibility of the title label.
     */
    Visibility?: Visibility;
    /**
     * The short text format of the title label, such as plain text or rich text.
     */
    FormatText?: ShortFormatText;
  }
  export interface VpcConnectionProperties {
    /**
     * The Amazon Resource Name (ARN) for the VPC connection.
     */
    VpcConnectionArn: Arn;
  }
  export type Warehouse = string;
  export interface WaterfallChartAggregatedFieldWells {
    /**
     * The category field wells of a waterfall visual.
     */
    Categories?: DimensionFieldList;
    /**
     * The value field wells of a waterfall visual.
     */
    Values?: MeasureFieldList;
    /**
     * The breakdown field wells of a waterfall visual.
     */
    Breakdowns?: DimensionFieldList;
  }
  export interface WaterfallChartConfiguration {
    /**
     * The field well configuration of a waterfall visual.
     */
    FieldWells?: WaterfallChartFieldWells;
    /**
     * The sort configuration of a waterfall visual.
     */
    SortConfiguration?: WaterfallChartSortConfiguration;
    /**
     * The options that determine the presentation of a waterfall visual.
     */
    WaterfallChartOptions?: WaterfallChartOptions;
    /**
     * The options that determine the presentation of the category axis label.
     */
    CategoryAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The options that determine the presentation of the category axis.
     */
    CategoryAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The options that determine the presentation of the y-axis label.
     */
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    /**
     * The options that determine the presentation of the y-axis.
     */
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    /**
     * The legend configuration of a waterfall visual.
     */
    Legend?: LegendOptions;
    /**
     * The data label configuration of a waterfall visual.
     */
    DataLabels?: DataLabelOptions;
    /**
     * The visual palette configuration of a waterfall visual.
     */
    VisualPalette?: VisualPalette;
  }
  export interface WaterfallChartFieldWells {
    /**
     * The field well configuration of a waterfall visual.
     */
    WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
  }
  export interface WaterfallChartOptions {
    /**
     * This option determines the total bar label of a waterfall visual.
     */
    TotalBarLabel?: String;
  }
  export interface WaterfallChartSortConfiguration {
    /**
     * The sort configuration of the category fields.
     */
    CategorySort?: FieldSortOptionsList;
    /**
     * The limit on the number of bar groups that are displayed.
     */
    BreakdownItemsLimit?: ItemsLimitConfiguration;
  }
  export interface WaterfallVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration for a waterfall visual.
     */
    ChartConfiguration?: WaterfallChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export interface WhatIfPointScenario {
    /**
     * The date that you need the forecast results for.
     */
    Date: Timestamp;
    /**
     * The target value that you want to meet for the provided date.
     */
    Value: Double;
  }
  export interface WhatIfRangeScenario {
    /**
     * The start date in the date range that you need the forecast results for.
     */
    StartDate: Timestamp;
    /**
     * The end date in the date range that you need the forecast results for.
     */
    EndDate: Timestamp;
    /**
     * The target value that you want to meet for the provided date range.
     */
    Value: Double;
  }
  export type WidgetStatus = "ENABLED"|"DISABLED"|string;
  export interface WordCloudAggregatedFieldWells {
    /**
     * The group by field well of a word cloud. Values are grouped by group by fields.
     */
    GroupBy?: WordCloudDimensionFieldList;
    /**
     * The size field well of a word cloud. Values are aggregated based on group by fields.
     */
    Size?: WordCloudMeasureFieldList;
  }
  export interface WordCloudChartConfiguration {
    /**
     * The field wells of the visual.
     */
    FieldWells?: WordCloudFieldWells;
    /**
     * The sort configuration of a word cloud visual.
     */
    SortConfiguration?: WordCloudSortConfiguration;
    /**
     * The label options (label text, label visibility, and sort icon visibility) for the word cloud category.
     */
    CategoryLabelOptions?: ChartAxisLabelOptions;
    /**
     * The options for a word cloud visual.
     */
    WordCloudOptions?: WordCloudOptions;
  }
  export type WordCloudCloudLayout = "FLUID"|"NORMAL"|string;
  export type WordCloudDimensionFieldList = DimensionField[];
  export interface WordCloudFieldWells {
    /**
     * The aggregated field wells of a word cloud.
     */
    WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
  }
  export type WordCloudMaximumStringLength = number;
  export type WordCloudMeasureFieldList = MeasureField[];
  export interface WordCloudOptions {
    /**
     * The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.
     */
    WordOrientation?: WordCloudWordOrientation;
    /**
     * The word scaling options (emphasize, normal) for the words in a word cloud.
     */
    WordScaling?: WordCloudWordScaling;
    /**
     * The cloud layout options (fluid, normal) of a word cloud.
     */
    CloudLayout?: WordCloudCloudLayout;
    /**
     * The word casing options (lower_case, existing_case) for the words in a word cloud.
     */
    WordCasing?: WordCloudWordCasing;
    /**
     * The word padding options (none, small, medium, large) for the words in a word cloud.
     */
    WordPadding?: WordCloudWordPadding;
    /**
     * The length limit of each word from 1-100.
     */
    MaximumStringLength?: WordCloudMaximumStringLength;
  }
  export interface WordCloudSortConfiguration {
    /**
     * The limit on the number of groups that are displayed in a word cloud.
     */
    CategoryItemsLimit?: ItemsLimitConfiguration;
    /**
     * The sort configuration of group by fields.
     */
    CategorySort?: FieldSortOptionsList;
  }
  export interface WordCloudVisual {
    /**
     * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
     */
    VisualId: ShortRestrictiveResourceId;
    /**
     * The title that is displayed on the visual.
     */
    Title?: VisualTitleLabelOptions;
    /**
     * The subtitle that is displayed on the visual.
     */
    Subtitle?: VisualSubtitleLabelOptions;
    /**
     * The configuration settings of the visual.
     */
    ChartConfiguration?: WordCloudChartConfiguration;
    /**
     * The list of custom actions that are configured for a visual.
     */
    Actions?: VisualCustomActionList;
    /**
     * The column hierarchy that is used during drill-downs and drill-ups.
     */
    ColumnHierarchies?: ColumnHierarchyList;
  }
  export type WordCloudWordCasing = "LOWER_CASE"|"EXISTING_CASE"|string;
  export type WordCloudWordOrientation = "HORIZONTAL"|"HORIZONTAL_AND_VERTICAL"|string;
  export type WordCloudWordPadding = "NONE"|"SMALL"|"MEDIUM"|"LARGE"|string;
  export type WordCloudWordScaling = "EMPHASIZE"|"NORMAL"|string;
  export type WorkGroup = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QuickSight client.
   */
  export import Types = QuickSight;
}
export = QuickSight;
