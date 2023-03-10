import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSOAdmin extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSOAdmin.Types.ClientConfiguration)
  config: Config & SSOAdmin.Types.ClientConfiguration;
  /**
   * Attaches the specified customer managed policy to the specified PermissionSet.
   */
  attachCustomerManagedPolicyReferenceToPermissionSet(params: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse, AWSError>;
  /**
   * Attaches the specified customer managed policy to the specified PermissionSet.
   */
  attachCustomerManagedPolicyReferenceToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse, AWSError>;
  /**
   * Attaches an AWS managed policy ARN to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts. 
   */
  attachManagedPolicyToPermissionSet(params: SSOAdmin.Types.AttachManagedPolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an AWS managed policy ARN to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts. 
   */
  attachManagedPolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified AWS account using a specified permission set.  The term principal here refers to a user or group that is defined in IAM Identity Center.   As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call  ProvisionPermissionSet  to make these updates.    After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.  
   */
  createAccountAssignment(params: SSOAdmin.Types.CreateAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified AWS account using a specified permission set.  The term principal here refers to a user or group that is defined in IAM Identity Center.   As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call  ProvisionPermissionSet  to make these updates.    After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.  
   */
  createAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.  After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created. 
   */
  createInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.  After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created. 
   */
  createInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Creates a permission set within a specified IAM Identity Center instance.  To grant users and groups access to AWS account resources, use  CreateAccountAssignment . 
   */
  createPermissionSet(params: SSOAdmin.Types.CreatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Creates a permission set within a specified IAM Identity Center instance.  To grant users and groups access to AWS account resources, use  CreateAccountAssignment . 
   */
  createPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified AWS account using a specified permission set.  After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment deletion request. 
   */
  deleteAccountAssignment(params: SSOAdmin.Types.DeleteAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified AWS account using a specified permission set.  After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment deletion request. 
   */
  deleteAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(params: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  deleteInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  deleteInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(params: SSOAdmin.Types.DeletePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Deletes the permissions boundary from a specified PermissionSet.
   */
  deletePermissionsBoundaryFromPermissionSet(params: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the permissions boundary from a specified PermissionSet.
   */
  deletePermissionsBoundaryFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(params: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(params: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  describeInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  describeInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(params: SSOAdmin.Types.DescribePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(params: SSOAdmin.Types.DescribePermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Detaches the specified customer managed policy from the specified PermissionSet.
   */
  detachCustomerManagedPolicyReferenceFromPermissionSet(params: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the specified customer managed policy from the specified PermissionSet.
   */
  detachCustomerManagedPolicyReferenceFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the attached AWS managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(params: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the attached AWS managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(params: SSOAdmin.Types.GetInlinePolicyForPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Obtains the permissions boundary for a specified PermissionSet.
   */
  getPermissionsBoundaryForPermissionSet(params: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse, AWSError>;
  /**
   * Obtains the permissions boundary for a specified PermissionSet.
   */
  getPermissionsBoundaryForPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentCreationStatus(params: SSOAdmin.Types.ListAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentDeletionStatus(params: SSOAdmin.Types.ListAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   */
  listAccountAssignments(params: SSOAdmin.Types.ListAccountAssignmentsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   */
  listAccountAssignments(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(params: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists all customer managed policies attached to a specified PermissionSet.
   */
  listCustomerManagedPolicyReferencesInPermissionSet(params: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse, AWSError>;
  /**
   * Lists all customer managed policies attached to a specified PermissionSet.
   */
  listCustomerManagedPolicyReferencesInPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse, AWSError>;
  /**
   * Lists the IAM Identity Center instances that the caller has access to.
   */
  listInstances(params: SSOAdmin.Types.ListInstancesRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the IAM Identity Center instances that the caller has access to.
   */
  listInstances(callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the AWS managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(params: SSOAdmin.Types.ListManagedPoliciesInPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the AWS managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
   */
  listPermissionSetProvisioningStatus(params: SSOAdmin.Types.ListPermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
   */
  listPermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the PermissionSets in an IAM Identity Center instance.
   */
  listPermissionSets(params: SSOAdmin.Types.ListPermissionSetsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists the PermissionSets in an IAM Identity Center instance.
   */
  listPermissionSets(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   */
  listPermissionSetsProvisionedToAccount(params: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   */
  listPermissionSetsProvisionedToAccount(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(params: SSOAdmin.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(params: SSOAdmin.Types.ProvisionPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * Attaches an inline policy to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this action to apply the corresponding IAM policy updates to all assigned accounts. 
   */
  putInlinePolicyToPermissionSet(params: SSOAdmin.Types.PutInlinePolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an inline policy to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this action to apply the corresponding IAM policy updates to all assigned accounts. 
   */
  putInlinePolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an AWS managed or customer managed policy to the specified PermissionSet as a permissions boundary.
   */
  putPermissionsBoundaryToPermissionSet(params: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse, AWSError>;
  /**
   * Attaches an AWS managed or customer managed policy to the specified PermissionSet as a permissions boundary.
   */
  putPermissionsBoundaryToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(params: SSOAdmin.Types.TagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(params: SSOAdmin.Types.UntagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  updateInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  updateInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(params: SSOAdmin.Types.UpdatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
}
declare namespace SSOAdmin {
  export interface AccessControlAttribute {
    /**
     * The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.
     */
    Key: AccessControlAttributeKey;
    /**
     * The value used for mapping a specified attribute to an identity source.
     */
    Value: AccessControlAttributeValue;
  }
  export type AccessControlAttributeKey = string;
  export type AccessControlAttributeList = AccessControlAttribute[];
  export interface AccessControlAttributeValue {
    /**
     * The identity source to use when mapping a specified attribute to IAM Identity Center.
     */
    Source: AccessControlAttributeValueSourceList;
  }
  export type AccessControlAttributeValueSource = string;
  export type AccessControlAttributeValueSourceList = AccessControlAttributeValueSource[];
  export interface AccountAssignment {
    /**
     * The identifier of the AWS account.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId?: PrincipalId;
  }
  export type AccountAssignmentList = AccountAssignment[];
  export interface AccountAssignmentOperationStatus {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType?: TargetType;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId?: PrincipalId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type AccountAssignmentOperationStatusList = AccountAssignmentOperationStatusMetadata[];
  export interface AccountAssignmentOperationStatusMetadata {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type AccountId = string;
  export type AccountList = AccountId[];
  export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference: CustomerManagedPolicyReference;
  }
  export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {
  }
  export interface AttachManagedPolicyToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet that the managed policy should be attached to.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The AWS managed policy ARN to be attached to a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
  }
  export interface AttachManagedPolicyToPermissionSetResponse {
  }
  export interface AttachedManagedPolicy {
    /**
     * The name of the AWS managed policy.
     */
    Name?: Name;
    /**
     * The ARN of the AWS managed policy. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    Arn?: ManagedPolicyArn;
  }
  export type AttachedManagedPolicyList = AttachedManagedPolicy[];
  export interface CreateAccountAssignmentRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: TargetType;
    /**
     * The ARN of the permission set that the admin wants to grant the principal access to.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType: PrincipalType;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
  }
  export interface CreateAccountAssignmentResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface CreateInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When using an external identity provider as an identity source, you can pass attributes through the SAML assertion. Doing so provides an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center will replace the attribute value with the value from the IAM Identity Center identity store.
     */
    InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
  }
  export interface CreateInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface CreatePermissionSetRequest {
    /**
     * The name of the PermissionSet.
     */
    Name: PermissionSetName;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The length of time that the application user sessions are valid in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
    /**
     * The tags to attach to the new PermissionSet.
     */
    Tags?: TagList;
  }
  export interface CreatePermissionSetResponse {
    /**
     * Defines the level of access on an AWS account.
     */
    PermissionSet?: PermissionSet;
  }
  export interface CustomerManagedPolicyReference {
    /**
     * The name of the IAM policy that you have configured in each account where you want to deploy your permission set.
     */
    Name: ManagedPolicyName;
    /**
     * The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is /. For more information, see Friendly names and paths in the IAM User Guide.
     */
    Path?: ManagedPolicyPath;
  }
  export type CustomerManagedPolicyReferenceList = CustomerManagedPolicyReference[];
  export type _Date = Date;
  export interface DeleteAccountAssignmentRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be deleted.
     */
    TargetType: TargetType;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The entity type for which the assignment will be deleted.
     */
    PrincipalType: PrincipalType;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
  }
  export interface DeleteAccountAssignmentResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DeleteInlinePolicyFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeleteInlinePolicyFromPermissionSetResponse {
  }
  export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface DeleteInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface DeletePermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that should be deleted.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeletePermissionSetResponse {
  }
  export interface DeletePermissionsBoundaryFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeletePermissionsBoundaryFromPermissionSetResponse {
  }
  export interface DescribeAccountAssignmentCreationStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentCreationRequestId: UUId;
  }
  export interface DescribeAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribeAccountAssignmentDeletionStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentDeletionRequestId: UUId;
  }
  export interface DescribeAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
    /**
     * The status of the attribute configuration process.
     */
    Status?: InstanceAccessControlAttributeConfigurationStatus;
    /**
     * Provides more details about the current status of the specified attribute.
     */
    StatusReason?: InstanceAccessControlAttributeConfigurationStatusReason;
    /**
     * Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC configuration.
     */
    InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
  }
  export interface DescribePermissionSetProvisioningStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is provided by the ProvisionPermissionSet call to retrieve the current status of the provisioning workflow.
     */
    ProvisionPermissionSetRequestId: UUId;
  }
  export interface DescribePermissionSetProvisioningStatusResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export interface DescribePermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set. 
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DescribePermissionSetResponse {
    /**
     * Describes the level of access on an AWS account.
     */
    PermissionSet?: PermissionSet;
  }
  export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference: CustomerManagedPolicyReference;
  }
  export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {
  }
  export interface DetachManagedPolicyFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet from which the policy should be detached.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The AWS managed policy ARN to be detached from a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
  }
  export interface DetachManagedPolicyFromPermissionSetResponse {
  }
  export type Duration = string;
  export interface GetInlinePolicyForPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface GetInlinePolicyForPermissionSetResponse {
    /**
     * The inline policy that is attached to the permission set.
     */
    InlinePolicy?: PermissionSetPolicyDocument;
  }
  export interface GetPermissionsBoundaryForPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface GetPermissionsBoundaryForPermissionSetResponse {
    /**
     * The permissions boundary attached to the specified permission set.
     */
    PermissionsBoundary?: PermissionsBoundary;
  }
  export type Id = string;
  export interface InstanceAccessControlAttributeConfiguration {
    /**
     * Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
     */
    AccessControlAttributes: AccessControlAttributeList;
  }
  export type InstanceAccessControlAttributeConfigurationStatus = "ENABLED"|"CREATION_IN_PROGRESS"|"CREATION_FAILED"|string;
  export type InstanceAccessControlAttributeConfigurationStatusReason = string;
  export type InstanceArn = string;
  export type InstanceList = InstanceMetadata[];
  export interface InstanceMetadata {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The identifier of the identity store that is connected to the IAM Identity Center instance.
     */
    IdentityStoreId?: Id;
  }
  export interface ListAccountAssignmentCreationStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentDeletionStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId: TargetId;
    /**
     * The ARN of the permission set from which to list assignments.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsResponse {
    /**
     * The list of assignments that match the input AWS account and permission set.
     */
    AccountAssignments?: AccountAssignmentList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountsForProvisionedPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet from which the associated AWS accounts will be listed.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The permission set provisioning status for an AWS account.
     */
    ProvisioningStatus?: ProvisioningStatus;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountsForProvisionedPermissionSetResponse {
    /**
     * The list of AWS AccountIds.
     */
    AccountIds?: AccountList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet. 
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The maximum number of results to display for the list call.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
    /**
     * Specifies the names and paths of the customer managed policies that you have attached to your permission set.
     */
    CustomerManagedPolicyReferences?: CustomerManagedPolicyReferenceList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesRequest {
    /**
     * The maximum number of results to display for the instance.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesResponse {
    /**
     * Lists the IAM Identity Center instances that the caller has access to.
     */
    Instances?: InstanceList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListManagedPoliciesInPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet whose managed policies will be listed.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListManagedPoliciesInPermissionSetResponse {
    /**
     * An array of the AttachedManagedPolicy data type object.
     */
    AttachedManagedPolicies?: AttachedManagedPolicyList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetProvisioningStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListPermissionSetProvisioningStatusResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetsProvisionedToAccountRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId: AccountId;
    /**
     * The status object for the permission set provisioning operation.
     */
    ProvisioningStatus?: ProvisioningStatus;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetsProvisionedToAccountResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Defines the level of access that an AWS account has.
     */
    PermissionSets?: PermissionSetList;
  }
  export interface ListPermissionSetsRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPermissionSetsResponse {
    /**
     * Defines the level of access on an AWS account.
     */
    PermissionSets?: PermissionSetList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags?: TagList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export type ManagedPolicyArn = string;
  export type ManagedPolicyName = string;
  export type ManagedPolicyPath = string;
  export type MaxResults = number;
  export type Name = string;
  export interface OperationStatusFilter {
    /**
     * Filters the list operations result based on the status attribute.
     */
    Status?: StatusValues;
  }
  export interface PermissionSet {
    /**
     * The name of the permission set.
     */
    Name?: PermissionSetName;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
  }
  export type PermissionSetArn = string;
  export type PermissionSetDescription = string;
  export type PermissionSetList = PermissionSetArn[];
  export type PermissionSetName = string;
  export type PermissionSetPolicyDocument = string;
  export interface PermissionSetProvisioningStatus {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the permission set that is being provisioned. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type PermissionSetProvisioningStatusList = PermissionSetProvisioningStatusMetadata[];
  export interface PermissionSetProvisioningStatusMetadata {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export interface PermissionsBoundary {
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
    /**
     * The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.
     */
    ManagedPolicyArn?: ManagedPolicyArn;
  }
  export type PrincipalId = string;
  export type PrincipalType = "USER"|"GROUP"|string;
  export interface ProvisionPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: ProvisionTargetType;
  }
  export interface ProvisionPermissionSetResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export type ProvisionTargetType = "AWS_ACCOUNT"|"ALL_PROVISIONED_ACCOUNTS"|string;
  export type ProvisioningStatus = "LATEST_PERMISSION_SET_PROVISIONED"|"LATEST_PERMISSION_SET_NOT_PROVISIONED"|string;
  export interface PutInlinePolicyToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The inline policy to attach to a PermissionSet.
     */
    InlinePolicy: PermissionSetPolicyDocument;
  }
  export interface PutInlinePolicyToPermissionSetResponse {
  }
  export interface PutPermissionsBoundaryToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The permissions boundary that you want to attach to a PermissionSet.
     */
    PermissionsBoundary: PermissionsBoundary;
  }
  export interface PutPermissionsBoundaryToPermissionSetResponse {
  }
  export type Reason = string;
  export type RelayState = string;
  export type StatusValues = "IN_PROGRESS"|"FAILED"|"SUCCEEDED"|string;
  export interface Tag {
    /**
     * The key for the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourceArn = string;
  export type TargetId = string;
  export type TargetType = "AWS_ACCOUNT"|string;
  export type Token = string;
  export type UUId = string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The keys of tags that are attached to the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
    /**
     * Updates the attributes for your ABAC configuration.
     */
    InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
  }
  export interface UpdateInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface UpdatePermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
  }
  export interface UpdatePermissionSetResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSOAdmin client.
   */
  export import Types = SSOAdmin;
}
export = SSOAdmin;
