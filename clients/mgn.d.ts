import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Mgn extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Mgn.Types.ClientConfiguration)
  config: Config & Mgn.Types.ClientConfiguration;
  /**
   * Archive application.
   */
  archiveApplication(params: Mgn.Types.ArchiveApplicationRequest, callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Archive application.
   */
  archiveApplication(callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Archive wave.
   */
  archiveWave(params: Mgn.Types.ArchiveWaveRequest, callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Archive wave.
   */
  archiveWave(callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Associate applications to wave.
   */
  associateApplications(params: Mgn.Types.AssociateApplicationsRequest, callback?: (err: AWSError, data: Mgn.Types.AssociateApplicationsResponse) => void): Request<Mgn.Types.AssociateApplicationsResponse, AWSError>;
  /**
   * Associate applications to wave.
   */
  associateApplications(callback?: (err: AWSError, data: Mgn.Types.AssociateApplicationsResponse) => void): Request<Mgn.Types.AssociateApplicationsResponse, AWSError>;
  /**
   * Associate source servers to application.
   */
  associateSourceServers(params: Mgn.Types.AssociateSourceServersRequest, callback?: (err: AWSError, data: Mgn.Types.AssociateSourceServersResponse) => void): Request<Mgn.Types.AssociateSourceServersResponse, AWSError>;
  /**
   * Associate source servers to application.
   */
  associateSourceServers(callback?: (err: AWSError, data: Mgn.Types.AssociateSourceServersResponse) => void): Request<Mgn.Types.AssociateSourceServersResponse, AWSError>;
  /**
   * Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
   */
  changeServerLifeCycleState(params: Mgn.Types.ChangeServerLifeCycleStateRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
   */
  changeServerLifeCycleState(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Create application.
   */
  createApplication(params: Mgn.Types.CreateApplicationRequest, callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Create application.
   */
  createApplication(callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Creates a new Launch Configuration Template.
   */
  createLaunchConfigurationTemplate(params: Mgn.Types.CreateLaunchConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.LaunchConfigurationTemplate) => void): Request<Mgn.Types.LaunchConfigurationTemplate, AWSError>;
  /**
   * Creates a new Launch Configuration Template.
   */
  createLaunchConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.LaunchConfigurationTemplate) => void): Request<Mgn.Types.LaunchConfigurationTemplate, AWSError>;
  /**
   * Creates a new ReplicationConfigurationTemplate.
   */
  createReplicationConfigurationTemplate(params: Mgn.Types.CreateReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.ReplicationConfigurationTemplate) => void): Request<Mgn.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Creates a new ReplicationConfigurationTemplate.
   */
  createReplicationConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.ReplicationConfigurationTemplate) => void): Request<Mgn.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Create wave.
   */
  createWave(params: Mgn.Types.CreateWaveRequest, callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Create wave.
   */
  createWave(callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Delete application.
   */
  deleteApplication(params: Mgn.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteApplicationResponse) => void): Request<Mgn.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Delete application.
   */
  deleteApplication(callback?: (err: AWSError, data: Mgn.Types.DeleteApplicationResponse) => void): Request<Mgn.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes a single Job by ID.
   */
  deleteJob(params: Mgn.Types.DeleteJobRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteJobResponse) => void): Request<Mgn.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a single Job by ID.
   */
  deleteJob(callback?: (err: AWSError, data: Mgn.Types.DeleteJobResponse) => void): Request<Mgn.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a single Launch Configuration Template by ID.
   */
  deleteLaunchConfigurationTemplate(params: Mgn.Types.DeleteLaunchConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteLaunchConfigurationTemplateResponse) => void): Request<Mgn.Types.DeleteLaunchConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single Launch Configuration Template by ID.
   */
  deleteLaunchConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.DeleteLaunchConfigurationTemplateResponse) => void): Request<Mgn.Types.DeleteLaunchConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single Replication Configuration Template by ID
   */
  deleteReplicationConfigurationTemplate(params: Mgn.Types.DeleteReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteReplicationConfigurationTemplateResponse) => void): Request<Mgn.Types.DeleteReplicationConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single Replication Configuration Template by ID
   */
  deleteReplicationConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.DeleteReplicationConfigurationTemplateResponse) => void): Request<Mgn.Types.DeleteReplicationConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single source server by ID.
   */
  deleteSourceServer(params: Mgn.Types.DeleteSourceServerRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteSourceServerResponse) => void): Request<Mgn.Types.DeleteSourceServerResponse, AWSError>;
  /**
   * Deletes a single source server by ID.
   */
  deleteSourceServer(callback?: (err: AWSError, data: Mgn.Types.DeleteSourceServerResponse) => void): Request<Mgn.Types.DeleteSourceServerResponse, AWSError>;
  /**
   * Deletes a given vCenter client by ID.
   */
  deleteVcenterClient(params: Mgn.Types.DeleteVcenterClientRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a given vCenter client by ID.
   */
  deleteVcenterClient(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete wave.
   */
  deleteWave(params: Mgn.Types.DeleteWaveRequest, callback?: (err: AWSError, data: Mgn.Types.DeleteWaveResponse) => void): Request<Mgn.Types.DeleteWaveResponse, AWSError>;
  /**
   * Delete wave.
   */
  deleteWave(callback?: (err: AWSError, data: Mgn.Types.DeleteWaveResponse) => void): Request<Mgn.Types.DeleteWaveResponse, AWSError>;
  /**
   * Retrieves detailed job log items with paging.
   */
  describeJobLogItems(params: Mgn.Types.DescribeJobLogItemsRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeJobLogItemsResponse) => void): Request<Mgn.Types.DescribeJobLogItemsResponse, AWSError>;
  /**
   * Retrieves detailed job log items with paging.
   */
  describeJobLogItems(callback?: (err: AWSError, data: Mgn.Types.DescribeJobLogItemsResponse) => void): Request<Mgn.Types.DescribeJobLogItemsResponse, AWSError>;
  /**
   * Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
   */
  describeJobs(params: Mgn.Types.DescribeJobsRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeJobsResponse) => void): Request<Mgn.Types.DescribeJobsResponse, AWSError>;
  /**
   * Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
   */
  describeJobs(callback?: (err: AWSError, data: Mgn.Types.DescribeJobsResponse) => void): Request<Mgn.Types.DescribeJobsResponse, AWSError>;
  /**
   * Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
   */
  describeLaunchConfigurationTemplates(params: Mgn.Types.DescribeLaunchConfigurationTemplatesRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeLaunchConfigurationTemplatesResponse) => void): Request<Mgn.Types.DescribeLaunchConfigurationTemplatesResponse, AWSError>;
  /**
   * Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
   */
  describeLaunchConfigurationTemplates(callback?: (err: AWSError, data: Mgn.Types.DescribeLaunchConfigurationTemplatesResponse) => void): Request<Mgn.Types.DescribeLaunchConfigurationTemplatesResponse, AWSError>;
  /**
   * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
   */
  describeReplicationConfigurationTemplates(params: Mgn.Types.DescribeReplicationConfigurationTemplatesRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeReplicationConfigurationTemplatesResponse) => void): Request<Mgn.Types.DescribeReplicationConfigurationTemplatesResponse, AWSError>;
  /**
   * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
   */
  describeReplicationConfigurationTemplates(callback?: (err: AWSError, data: Mgn.Types.DescribeReplicationConfigurationTemplatesResponse) => void): Request<Mgn.Types.DescribeReplicationConfigurationTemplatesResponse, AWSError>;
  /**
   * Retrieves all SourceServers or multiple SourceServers by ID.
   */
  describeSourceServers(params: Mgn.Types.DescribeSourceServersRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeSourceServersResponse) => void): Request<Mgn.Types.DescribeSourceServersResponse, AWSError>;
  /**
   * Retrieves all SourceServers or multiple SourceServers by ID.
   */
  describeSourceServers(callback?: (err: AWSError, data: Mgn.Types.DescribeSourceServersResponse) => void): Request<Mgn.Types.DescribeSourceServersResponse, AWSError>;
  /**
   * Returns a list of the installed vCenter clients.
   */
  describeVcenterClients(params: Mgn.Types.DescribeVcenterClientsRequest, callback?: (err: AWSError, data: Mgn.Types.DescribeVcenterClientsResponse) => void): Request<Mgn.Types.DescribeVcenterClientsResponse, AWSError>;
  /**
   * Returns a list of the installed vCenter clients.
   */
  describeVcenterClients(callback?: (err: AWSError, data: Mgn.Types.DescribeVcenterClientsResponse) => void): Request<Mgn.Types.DescribeVcenterClientsResponse, AWSError>;
  /**
   * Disassociate applications from wave.
   */
  disassociateApplications(params: Mgn.Types.DisassociateApplicationsRequest, callback?: (err: AWSError, data: Mgn.Types.DisassociateApplicationsResponse) => void): Request<Mgn.Types.DisassociateApplicationsResponse, AWSError>;
  /**
   * Disassociate applications from wave.
   */
  disassociateApplications(callback?: (err: AWSError, data: Mgn.Types.DisassociateApplicationsResponse) => void): Request<Mgn.Types.DisassociateApplicationsResponse, AWSError>;
  /**
   * Disassociate source servers from application.
   */
  disassociateSourceServers(params: Mgn.Types.DisassociateSourceServersRequest, callback?: (err: AWSError, data: Mgn.Types.DisassociateSourceServersResponse) => void): Request<Mgn.Types.DisassociateSourceServersResponse, AWSError>;
  /**
   * Disassociate source servers from application.
   */
  disassociateSourceServers(callback?: (err: AWSError, data: Mgn.Types.DisassociateSourceServersResponse) => void): Request<Mgn.Types.DisassociateSourceServersResponse, AWSError>;
  /**
   * Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectFromService(params: Mgn.Types.DisconnectFromServiceRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectFromService(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  finalizeCutover(params: Mgn.Types.FinalizeCutoverRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  finalizeCutover(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Lists all LaunchConfigurations available, filtered by Source Server IDs.
   */
  getLaunchConfiguration(params: Mgn.Types.GetLaunchConfigurationRequest, callback?: (err: AWSError, data: Mgn.Types.LaunchConfiguration) => void): Request<Mgn.Types.LaunchConfiguration, AWSError>;
  /**
   * Lists all LaunchConfigurations available, filtered by Source Server IDs.
   */
  getLaunchConfiguration(callback?: (err: AWSError, data: Mgn.Types.LaunchConfiguration) => void): Request<Mgn.Types.LaunchConfiguration, AWSError>;
  /**
   * Lists all ReplicationConfigurations, filtered by Source Server ID.
   */
  getReplicationConfiguration(params: Mgn.Types.GetReplicationConfigurationRequest, callback?: (err: AWSError, data: Mgn.Types.ReplicationConfiguration) => void): Request<Mgn.Types.ReplicationConfiguration, AWSError>;
  /**
   * Lists all ReplicationConfigurations, filtered by Source Server ID.
   */
  getReplicationConfiguration(callback?: (err: AWSError, data: Mgn.Types.ReplicationConfiguration) => void): Request<Mgn.Types.ReplicationConfiguration, AWSError>;
  /**
   * Initialize Application Migration Service.
   */
  initializeService(params: Mgn.Types.InitializeServiceRequest, callback?: (err: AWSError, data: Mgn.Types.InitializeServiceResponse) => void): Request<Mgn.Types.InitializeServiceResponse, AWSError>;
  /**
   * Initialize Application Migration Service.
   */
  initializeService(callback?: (err: AWSError, data: Mgn.Types.InitializeServiceResponse) => void): Request<Mgn.Types.InitializeServiceResponse, AWSError>;
  /**
   * Retrieves all applications or multiple applications by ID.
   */
  listApplications(params: Mgn.Types.ListApplicationsRequest, callback?: (err: AWSError, data: Mgn.Types.ListApplicationsResponse) => void): Request<Mgn.Types.ListApplicationsResponse, AWSError>;
  /**
   * Retrieves all applications or multiple applications by ID.
   */
  listApplications(callback?: (err: AWSError, data: Mgn.Types.ListApplicationsResponse) => void): Request<Mgn.Types.ListApplicationsResponse, AWSError>;
  /**
   * List source server post migration custom actions.
   */
  listSourceServerActions(params: Mgn.Types.ListSourceServerActionsRequest, callback?: (err: AWSError, data: Mgn.Types.ListSourceServerActionsResponse) => void): Request<Mgn.Types.ListSourceServerActionsResponse, AWSError>;
  /**
   * List source server post migration custom actions.
   */
  listSourceServerActions(callback?: (err: AWSError, data: Mgn.Types.ListSourceServerActionsResponse) => void): Request<Mgn.Types.ListSourceServerActionsResponse, AWSError>;
  /**
   * List all tags for your Application Migration Service resources.
   */
  listTagsForResource(params: Mgn.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Mgn.Types.ListTagsForResourceResponse) => void): Request<Mgn.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List all tags for your Application Migration Service resources.
   */
  listTagsForResource(callback?: (err: AWSError, data: Mgn.Types.ListTagsForResourceResponse) => void): Request<Mgn.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List template post migration custom actions.
   */
  listTemplateActions(params: Mgn.Types.ListTemplateActionsRequest, callback?: (err: AWSError, data: Mgn.Types.ListTemplateActionsResponse) => void): Request<Mgn.Types.ListTemplateActionsResponse, AWSError>;
  /**
   * List template post migration custom actions.
   */
  listTemplateActions(callback?: (err: AWSError, data: Mgn.Types.ListTemplateActionsResponse) => void): Request<Mgn.Types.ListTemplateActionsResponse, AWSError>;
  /**
   * Retrieves all waves or multiple waves by ID.
   */
  listWaves(params: Mgn.Types.ListWavesRequest, callback?: (err: AWSError, data: Mgn.Types.ListWavesResponse) => void): Request<Mgn.Types.ListWavesResponse, AWSError>;
  /**
   * Retrieves all waves or multiple waves by ID.
   */
  listWaves(callback?: (err: AWSError, data: Mgn.Types.ListWavesResponse) => void): Request<Mgn.Types.ListWavesResponse, AWSError>;
  /**
   * Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
   */
  markAsArchived(params: Mgn.Types.MarkAsArchivedRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
   */
  markAsArchived(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Put source server post migration custom action.
   */
  putSourceServerAction(params: Mgn.Types.PutSourceServerActionRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServerActionDocument) => void): Request<Mgn.Types.SourceServerActionDocument, AWSError>;
  /**
   * Put source server post migration custom action.
   */
  putSourceServerAction(callback?: (err: AWSError, data: Mgn.Types.SourceServerActionDocument) => void): Request<Mgn.Types.SourceServerActionDocument, AWSError>;
  /**
   * Put template post migration custom action.
   */
  putTemplateAction(params: Mgn.Types.PutTemplateActionRequest, callback?: (err: AWSError, data: Mgn.Types.TemplateActionDocument) => void): Request<Mgn.Types.TemplateActionDocument, AWSError>;
  /**
   * Put template post migration custom action.
   */
  putTemplateAction(callback?: (err: AWSError, data: Mgn.Types.TemplateActionDocument) => void): Request<Mgn.Types.TemplateActionDocument, AWSError>;
  /**
   * Remove source server post migration custom action.
   */
  removeSourceServerAction(params: Mgn.Types.RemoveSourceServerActionRequest, callback?: (err: AWSError, data: Mgn.Types.RemoveSourceServerActionResponse) => void): Request<Mgn.Types.RemoveSourceServerActionResponse, AWSError>;
  /**
   * Remove source server post migration custom action.
   */
  removeSourceServerAction(callback?: (err: AWSError, data: Mgn.Types.RemoveSourceServerActionResponse) => void): Request<Mgn.Types.RemoveSourceServerActionResponse, AWSError>;
  /**
   * Remove template post migration custom action.
   */
  removeTemplateAction(params: Mgn.Types.RemoveTemplateActionRequest, callback?: (err: AWSError, data: Mgn.Types.RemoveTemplateActionResponse) => void): Request<Mgn.Types.RemoveTemplateActionResponse, AWSError>;
  /**
   * Remove template post migration custom action.
   */
  removeTemplateAction(callback?: (err: AWSError, data: Mgn.Types.RemoveTemplateActionResponse) => void): Request<Mgn.Types.RemoveTemplateActionResponse, AWSError>;
  /**
   * Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
   */
  retryDataReplication(params: Mgn.Types.RetryDataReplicationRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
   */
  retryDataReplication(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
   */
  startCutover(params: Mgn.Types.StartCutoverRequest, callback?: (err: AWSError, data: Mgn.Types.StartCutoverResponse) => void): Request<Mgn.Types.StartCutoverResponse, AWSError>;
  /**
   * Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
   */
  startCutover(callback?: (err: AWSError, data: Mgn.Types.StartCutoverResponse) => void): Request<Mgn.Types.StartCutoverResponse, AWSError>;
  /**
   * Starts replication for SNAPSHOT_SHIPPING agents.
   */
  startReplication(params: Mgn.Types.StartReplicationRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Starts replication for SNAPSHOT_SHIPPING agents.
   */
  startReplication(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
   */
  startTest(params: Mgn.Types.StartTestRequest, callback?: (err: AWSError, data: Mgn.Types.StartTestResponse) => void): Request<Mgn.Types.StartTestResponse, AWSError>;
  /**
   * Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
   */
  startTest(callback?: (err: AWSError, data: Mgn.Types.StartTestResponse) => void): Request<Mgn.Types.StartTestResponse, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
   */
  tagResource(params: Mgn.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
   */
  terminateTargetInstances(params: Mgn.Types.TerminateTargetInstancesRequest, callback?: (err: AWSError, data: Mgn.Types.TerminateTargetInstancesResponse) => void): Request<Mgn.Types.TerminateTargetInstancesResponse, AWSError>;
  /**
   * Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
   */
  terminateTargetInstances(callback?: (err: AWSError, data: Mgn.Types.TerminateTargetInstancesResponse) => void): Request<Mgn.Types.TerminateTargetInstancesResponse, AWSError>;
  /**
   * Unarchive application.
   */
  unarchiveApplication(params: Mgn.Types.UnarchiveApplicationRequest, callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Unarchive application.
   */
  unarchiveApplication(callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Unarchive wave.
   */
  unarchiveWave(params: Mgn.Types.UnarchiveWaveRequest, callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Unarchive wave.
   */
  unarchiveWave(callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Deletes the specified set of tags from the specified set of Application Migration Service resources.
   */
  untagResource(params: Mgn.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified set of tags from the specified set of Application Migration Service resources.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Update application.
   */
  updateApplication(params: Mgn.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Update application.
   */
  updateApplication(callback?: (err: AWSError, data: Mgn.Types.Application) => void): Request<Mgn.Types.Application, AWSError>;
  /**
   * Updates multiple LaunchConfigurations by Source Server ID.
   */
  updateLaunchConfiguration(params: Mgn.Types.UpdateLaunchConfigurationRequest, callback?: (err: AWSError, data: Mgn.Types.LaunchConfiguration) => void): Request<Mgn.Types.LaunchConfiguration, AWSError>;
  /**
   * Updates multiple LaunchConfigurations by Source Server ID.
   */
  updateLaunchConfiguration(callback?: (err: AWSError, data: Mgn.Types.LaunchConfiguration) => void): Request<Mgn.Types.LaunchConfiguration, AWSError>;
  /**
   * Updates an existing Launch Configuration Template by ID.
   */
  updateLaunchConfigurationTemplate(params: Mgn.Types.UpdateLaunchConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.LaunchConfigurationTemplate) => void): Request<Mgn.Types.LaunchConfigurationTemplate, AWSError>;
  /**
   * Updates an existing Launch Configuration Template by ID.
   */
  updateLaunchConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.LaunchConfigurationTemplate) => void): Request<Mgn.Types.LaunchConfigurationTemplate, AWSError>;
  /**
   * Allows you to update multiple ReplicationConfigurations by Source Server ID.
   */
  updateReplicationConfiguration(params: Mgn.Types.UpdateReplicationConfigurationRequest, callback?: (err: AWSError, data: Mgn.Types.ReplicationConfiguration) => void): Request<Mgn.Types.ReplicationConfiguration, AWSError>;
  /**
   * Allows you to update multiple ReplicationConfigurations by Source Server ID.
   */
  updateReplicationConfiguration(callback?: (err: AWSError, data: Mgn.Types.ReplicationConfiguration) => void): Request<Mgn.Types.ReplicationConfiguration, AWSError>;
  /**
   * Updates multiple ReplicationConfigurationTemplates by ID.
   */
  updateReplicationConfigurationTemplate(params: Mgn.Types.UpdateReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Mgn.Types.ReplicationConfigurationTemplate) => void): Request<Mgn.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Updates multiple ReplicationConfigurationTemplates by ID.
   */
  updateReplicationConfigurationTemplate(callback?: (err: AWSError, data: Mgn.Types.ReplicationConfigurationTemplate) => void): Request<Mgn.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
   */
  updateSourceServerReplicationType(params: Mgn.Types.UpdateSourceServerReplicationTypeRequest, callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
   */
  updateSourceServerReplicationType(callback?: (err: AWSError, data: Mgn.Types.SourceServer) => void): Request<Mgn.Types.SourceServer, AWSError>;
  /**
   * Update wave.
   */
  updateWave(params: Mgn.Types.UpdateWaveRequest, callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
  /**
   * Update wave.
   */
  updateWave(callback?: (err: AWSError, data: Mgn.Types.Wave) => void): Request<Mgn.Types.Wave, AWSError>;
}
declare namespace Mgn {
  export type ARN = string;
  export type ActionID = string;
  export type ActionIDs = ActionID[];
  export type ActionName = string;
  export interface Application {
    /**
     * Application aggregated status.
     */
    applicationAggregatedStatus?: ApplicationAggregatedStatus;
    /**
     * Application ID.
     */
    applicationID?: ApplicationID;
    /**
     * Application ARN.
     */
    arn?: ARN;
    /**
     * Application creation dateTime.
     */
    creationDateTime?: ISO8601DatetimeString;
    /**
     * Application description.
     */
    description?: ApplicationDescription;
    /**
     * Application archival status.
     */
    isArchived?: Boolean;
    /**
     * Application last modified dateTime.
     */
    lastModifiedDateTime?: ISO8601DatetimeString;
    /**
     * Application name.
     */
    name?: ApplicationName;
    /**
     * Application tags.
     */
    tags?: TagsMap;
    /**
     * Application wave ID.
     */
    waveID?: WaveID;
  }
  export interface ApplicationAggregatedStatus {
    /**
     * Application aggregated status health status.
     */
    healthStatus?: ApplicationHealthStatus;
    /**
     * Application aggregated status last update dateTime.
     */
    lastUpdateDateTime?: ISO8601DatetimeString;
    /**
     * Application aggregated status progress status.
     */
    progressStatus?: ApplicationProgressStatus;
    /**
     * Application aggregated status total source servers amount.
     */
    totalSourceServers?: PositiveInteger;
  }
  export type ApplicationDescription = string;
  export type ApplicationHealthStatus = "HEALTHY"|"LAGGING"|"ERROR"|string;
  export type ApplicationID = string;
  export type ApplicationIDs = ApplicationID[];
  export type ApplicationIDsFilter = ApplicationID[];
  export type ApplicationName = string;
  export type ApplicationProgressStatus = "NOT_STARTED"|"IN_PROGRESS"|"COMPLETED"|string;
  export type ApplicationsList = Application[];
  export interface ArchiveApplicationRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
  }
  export interface ArchiveWaveRequest {
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface AssociateApplicationsRequest {
    /**
     * Application IDs list.
     */
    applicationIDs: ApplicationIDs;
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface AssociateApplicationsResponse {
  }
  export interface AssociateSourceServersRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
    /**
     * Source server IDs list.
     */
    sourceServerIDs: AssociateSourceServersRequestSourceServerIDs;
  }
  export type AssociateSourceServersRequestSourceServerIDs = SourceServerID[];
  export interface AssociateSourceServersResponse {
  }
  export type Boolean = boolean;
  export type BootMode = "LEGACY_BIOS"|"UEFI"|string;
  export type BoundedString = string;
  export interface CPU {
    /**
     * The number of CPU cores on the source server.
     */
    cores?: PositiveInteger;
    /**
     * The source server's CPU model name.
     */
    modelName?: BoundedString;
  }
  export interface ChangeServerLifeCycleStateRequest {
    /**
     * The request to change the source server migration lifecycle state.
     */
    lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle;
    /**
     * The request to change the source server migration lifecycle state by source server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface ChangeServerLifeCycleStateSourceServerLifecycle {
    /**
     * The request to change the source server migration lifecycle state.
     */
    state: ChangeServerLifeCycleStateSourceServerLifecycleState;
  }
  export type ChangeServerLifeCycleStateSourceServerLifecycleState = "READY_FOR_TEST"|"READY_FOR_CUTOVER"|"CUTOVER"|string;
  export type CloudWatchLogGroupName = string;
  export type Cpus = CPU[];
  export interface CreateApplicationRequest {
    /**
     * Application description.
     */
    description?: ApplicationDescription;
    /**
     * Application name.
     */
    name: ApplicationName;
    /**
     * Application tags.
     */
    tags?: TagsMap;
  }
  export interface CreateLaunchConfigurationTemplateRequest {
    /**
     * Associate public Ip address.
     */
    associatePublicIpAddress?: Boolean;
    /**
     * Launch configuration template boot mode.
     */
    bootMode?: BootMode;
    /**
     * Copy private Ip.
     */
    copyPrivateIp?: Boolean;
    /**
     * Copy tags.
     */
    copyTags?: Boolean;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: Boolean;
    /**
     * Large volume config.
     */
    largeVolumeConf?: LaunchTemplateDiskConf;
    /**
     * Launch disposition.
     */
    launchDisposition?: LaunchDisposition;
    licensing?: Licensing;
    /**
     * Launch configuration template map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: TagValue;
    /**
     * Launch configuration template post launch actions.
     */
    postLaunchActions?: PostLaunchActions;
    /**
     * Small volume config.
     */
    smallVolumeConf?: LaunchTemplateDiskConf;
    /**
     * Small volume maximum size.
     */
    smallVolumeMaxSize?: PositiveInteger;
    /**
     * Request to associate tags during creation of a Launch Configuration Template.
     */
    tags?: TagsMap;
    /**
     * Target instance type right-sizing method.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export interface CreateReplicationConfigurationTemplateRequest {
    /**
     * Request to associate the default Application Migration Service Security group with the Replication Settings template.
     */
    associateDefaultSecurityGroup: Boolean;
    /**
     * Request to configure bandwidth throttling during Replication Settings template creation.
     */
    bandwidthThrottling: PositiveInteger;
    /**
     * Request to create Public IP during Replication Settings template creation.
     */
    createPublicIP: Boolean;
    /**
     * Request to configure data plane routing during Replication Settings template creation.
     */
    dataPlaneRouting: ReplicationConfigurationDataPlaneRouting;
    /**
     * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
     */
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * Request to configure EBS encryption during Replication Settings template creation.
     */
    ebsEncryption: ReplicationConfigurationEbsEncryption;
    /**
     * Request to configure an EBS encryption key during Replication Settings template creation.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * Request to configure the Replication Server instance type during Replication Settings template creation.
     */
    replicationServerInstanceType: EC2InstanceType;
    /**
     * Request to configure the Replication Server Security group ID during Replication Settings template creation.
     */
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDs;
    /**
     * Request to configure the Staging Area subnet ID during Replication Settings template creation.
     */
    stagingAreaSubnetId: SubnetID;
    /**
     * Request to configure Staging Area tags during Replication Settings template creation.
     */
    stagingAreaTags: TagsMap;
    /**
     * Request to configure tags during Replication Settings template creation.
     */
    tags?: TagsMap;
    /**
     * Request to use Dedicated Replication Servers during Replication Settings template creation.
     */
    useDedicatedReplicationServer: Boolean;
  }
  export interface CreateWaveRequest {
    /**
     * Wave description.
     */
    description?: WaveDescription;
    /**
     * Wave name.
     */
    name: WaveName;
    /**
     * Wave tags.
     */
    tags?: TagsMap;
  }
  export interface DataReplicationError {
    /**
     * Error in data replication.
     */
    error?: DataReplicationErrorString;
    /**
     * Error in data replication.
     */
    rawError?: LargeBoundedString;
  }
  export type DataReplicationErrorString = "AGENT_NOT_SEEN"|"SNAPSHOTS_FAILURE"|"NOT_CONVERGING"|"UNSTABLE_NETWORK"|"FAILED_TO_CREATE_SECURITY_GROUP"|"FAILED_TO_LAUNCH_REPLICATION_SERVER"|"FAILED_TO_BOOT_REPLICATION_SERVER"|"FAILED_TO_AUTHENTICATE_WITH_SERVICE"|"FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE"|"FAILED_TO_CREATE_STAGING_DISKS"|"FAILED_TO_ATTACH_STAGING_DISKS"|"FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT"|"FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER"|"FAILED_TO_START_DATA_TRANSFER"|"UNSUPPORTED_VM_CONFIGURATION"|"LAST_SNAPSHOT_JOB_FAILED"|string;
  export interface DataReplicationInfo {
    /**
     * Error in obtaining data replication info.
     */
    dataReplicationError?: DataReplicationError;
    /**
     * Request to query whether data replication has been initiated.
     */
    dataReplicationInitiation?: DataReplicationInitiation;
    /**
     * Request to query the data replication state.
     */
    dataReplicationState?: DataReplicationState;
    /**
     * Request to query the time when data replication will be complete.
     */
    etaDateTime?: ISO8601DatetimeString;
    /**
     * Request to query data replication lag duration.
     */
    lagDuration?: ISO8601DurationString;
    /**
     * Request to query data replication last snapshot time.
     */
    lastSnapshotDateTime?: ISO8601DatetimeString;
    /**
     * Request to query disks replicated.
     */
    replicatedDisks?: DataReplicationInfoReplicatedDisks;
  }
  export interface DataReplicationInfoReplicatedDisk {
    /**
     * Request to query data replication backlog size in bytes.
     */
    backloggedStorageBytes?: PositiveInteger;
    /**
     * Request to query device name.
     */
    deviceName?: BoundedString;
    /**
     * Request to query amount of data replicated in bytes.
     */
    replicatedStorageBytes?: PositiveInteger;
    /**
     * Request to query amount of data rescanned in bytes.
     */
    rescannedStorageBytes?: PositiveInteger;
    /**
     * Request to query total amount of data replicated in bytes.
     */
    totalStorageBytes?: PositiveInteger;
  }
  export type DataReplicationInfoReplicatedDisks = DataReplicationInfoReplicatedDisk[];
  export interface DataReplicationInitiation {
    /**
     * Request to query next data initiation date and time.
     */
    nextAttemptDateTime?: ISO8601DatetimeString;
    /**
     * Request to query data initiation start date and time.
     */
    startDateTime?: ISO8601DatetimeString;
    /**
     * Request to query data initiation steps.
     */
    steps?: DataReplicationInitiationSteps;
  }
  export interface DataReplicationInitiationStep {
    /**
     * Request to query data initiation step name.
     */
    name?: DataReplicationInitiationStepName;
    /**
     * Request to query data initiation status.
     */
    status?: DataReplicationInitiationStepStatus;
  }
  export type DataReplicationInitiationStepName = "WAIT"|"CREATE_SECURITY_GROUP"|"LAUNCH_REPLICATION_SERVER"|"BOOT_REPLICATION_SERVER"|"AUTHENTICATE_WITH_SERVICE"|"DOWNLOAD_REPLICATION_SOFTWARE"|"CREATE_STAGING_DISKS"|"ATTACH_STAGING_DISKS"|"PAIR_REPLICATION_SERVER_WITH_AGENT"|"CONNECT_AGENT_TO_REPLICATION_SERVER"|"START_DATA_TRANSFER"|string;
  export type DataReplicationInitiationStepStatus = "NOT_STARTED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"SKIPPED"|string;
  export type DataReplicationInitiationSteps = DataReplicationInitiationStep[];
  export type DataReplicationState = "STOPPED"|"INITIATING"|"INITIAL_SYNC"|"BACKLOG"|"CREATING_SNAPSHOT"|"CONTINUOUS"|"PAUSED"|"RESCAN"|"STALLED"|"DISCONNECTED"|"PENDING_SNAPSHOT_SHIPPING"|"SHIPPING_SNAPSHOT"|string;
  export interface DeleteApplicationRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DeleteJobRequest {
    /**
     * Request to delete Job from service by Job ID.
     */
    jobID: JobID;
  }
  export interface DeleteJobResponse {
  }
  export interface DeleteLaunchConfigurationTemplateRequest {
    /**
     * ID of resource to be deleted.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
  }
  export interface DeleteLaunchConfigurationTemplateResponse {
  }
  export interface DeleteReplicationConfigurationTemplateRequest {
    /**
     * Request to delete Replication Configuration Template from service by Replication Configuration Template ID.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
  }
  export interface DeleteReplicationConfigurationTemplateResponse {
  }
  export interface DeleteSourceServerRequest {
    /**
     * Request to delete Source Server from service by Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface DeleteSourceServerResponse {
  }
  export interface DeleteVcenterClientRequest {
    /**
     * ID of resource to be deleted.
     */
    vcenterClientID: VcenterClientID;
  }
  export interface DeleteWaveRequest {
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface DeleteWaveResponse {
  }
  export interface DescribeJobLogItemsRequest {
    /**
     * Request to describe Job log job ID.
     */
    jobID: JobID;
    /**
     * Request to describe Job log item maximum results.
     */
    maxResults?: MaxResultsType;
    /**
     * Request to describe Job log next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobLogItemsResponse {
    /**
     * Request to describe Job log response items.
     */
    items?: JobLogs;
    /**
     * Request to describe Job log response next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobsRequest {
    /**
     * Request to describe Job log filters.
     */
    filters?: DescribeJobsRequestFilters;
    /**
     * Request to describe job log items by max results.
     */
    maxResults?: MaxResultsType;
    /**
     * Request to describe job log items by next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobsRequestFilters {
    /**
     * Request to describe Job log filters by date.
     */
    fromDate?: ISO8601DatetimeString;
    /**
     * Request to describe Job log filters by job ID.
     */
    jobIDs?: DescribeJobsRequestFiltersJobIDs;
    /**
     * Request to describe job log items by last date.
     */
    toDate?: ISO8601DatetimeString;
  }
  export type DescribeJobsRequestFiltersJobIDs = JobID[];
  export interface DescribeJobsResponse {
    /**
     * Request to describe Job log items.
     */
    items?: JobsList;
    /**
     * Request to describe Job response by next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeLaunchConfigurationTemplatesRequest {
    /**
     * Request to filter Launch Configuration Templates list by Launch Configuration Template ID.
     */
    launchConfigurationTemplateIDs?: LaunchConfigurationTemplateIDs;
    /**
     * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
     */
    maxResults?: MaxResultsType;
    /**
     * Next pagination token returned from DescribeLaunchConfigurationTemplates.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeLaunchConfigurationTemplatesResponse {
    /**
     * List of items returned by DescribeLaunchConfigurationTemplates.
     */
    items?: LaunchConfigurationTemplates;
    /**
     * Next pagination token returned from DescribeLaunchConfigurationTemplates.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeReplicationConfigurationTemplatesRequest {
    /**
     * Request to describe Replication Configuration template by max results.
     */
    maxResults?: MaxResultsType;
    /**
     * Request to describe Replication Configuration template by next token.
     */
    nextToken?: PaginationToken;
    /**
     * Request to describe Replication Configuration template by template IDs.
     */
    replicationConfigurationTemplateIDs?: ReplicationConfigurationTemplateIDs;
  }
  export interface DescribeReplicationConfigurationTemplatesResponse {
    /**
     * Request to describe Replication Configuration template by items.
     */
    items?: ReplicationConfigurationTemplates;
    /**
     * Request to describe Replication Configuration template by next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeSourceServersRequest {
    /**
     * Request to filter Source Servers list.
     */
    filters?: DescribeSourceServersRequestFilters;
    /**
     * Request to filter Source Servers list by maximum results.
     */
    maxResults?: MaxResultsType;
    /**
     * Request to filter Source Servers list by next token.
     */
    nextToken?: PaginationToken;
  }
  export type DescribeSourceServersRequestApplicationIDs = ApplicationID[];
  export interface DescribeSourceServersRequestFilters {
    /**
     * Request to filter Source Servers list by application IDs.
     */
    applicationIDs?: DescribeSourceServersRequestApplicationIDs;
    /**
     * Request to filter Source Servers list by archived.
     */
    isArchived?: Boolean;
    /**
     * Request to filter Source Servers list by life cycle states.
     */
    lifeCycleStates?: LifeCycleStates;
    /**
     * Request to filter Source Servers list by replication type.
     */
    replicationTypes?: ReplicationTypes;
    /**
     * Request to filter Source Servers list by Source Server ID.
     */
    sourceServerIDs?: DescribeSourceServersRequestFiltersIDs;
  }
  export type DescribeSourceServersRequestFiltersIDs = SourceServerID[];
  export interface DescribeSourceServersResponse {
    /**
     * Request to filter Source Servers list by item.
     */
    items?: SourceServersList;
    /**
     * Request to filter Source Servers next token.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeVcenterClientsRequest {
    /**
     * Maximum results to be returned in DescribeVcenterClients.
     */
    maxResults?: MaxResultsType;
    /**
     * Next pagination token to be provided for DescribeVcenterClients.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeVcenterClientsResponse {
    /**
     * List of items returned by DescribeVcenterClients.
     */
    items?: VcenterClientList;
    /**
     * Next pagination token returned from DescribeVcenterClients.
     */
    nextToken?: PaginationToken;
  }
  export interface DisassociateApplicationsRequest {
    /**
     * Application IDs list.
     */
    applicationIDs: ApplicationIDs;
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface DisassociateApplicationsResponse {
  }
  export interface DisassociateSourceServersRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
    /**
     * Source server IDs list.
     */
    sourceServerIDs: DisassociateSourceServersRequestSourceServerIDs;
  }
  export type DisassociateSourceServersRequestSourceServerIDs = SourceServerID[];
  export interface DisassociateSourceServersResponse {
  }
  export interface DisconnectFromServiceRequest {
    /**
     * Request to disconnect Source Server from service by Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface Disk {
    /**
     * The amount of storage on the disk in bytes.
     */
    bytes?: PositiveInteger;
    /**
     * The disk or device name.
     */
    deviceName?: BoundedString;
  }
  export type Disks = Disk[];
  export type DocumentVersion = string;
  export type EC2InstanceID = string;
  export type EC2InstanceType = string;
  export type EC2LaunchConfigurationTemplateID = string;
  export interface FinalizeCutoverRequest {
    /**
     * Request to finalize Cutover by Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export type FirstBoot = "WAITING"|"SUCCEEDED"|"UNKNOWN"|"STOPPED"|string;
  export interface GetLaunchConfigurationRequest {
    /**
     * Request to get Launch Configuration information by Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface GetReplicationConfigurationRequest {
    /**
     * Request to get Replication Configuration by Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export type IPsList = BoundedString[];
  export type ISO8601DatetimeString = string;
  export type ISO8601DurationString = string;
  export interface IdentificationHints {
    /**
     * AWS Instance ID identification hint.
     */
    awsInstanceID?: EC2InstanceID;
    /**
     * FQDN address identification hint.
     */
    fqdn?: BoundedString;
    /**
     * Hostname identification hint.
     */
    hostname?: BoundedString;
    /**
     * vCenter VM path identification hint.
     */
    vmPath?: BoundedString;
    /**
     * vmWare UUID identification hint.
     */
    vmWareUuid?: BoundedString;
  }
  export interface InitializeServiceRequest {
  }
  export interface InitializeServiceResponse {
  }
  export type InitiatedBy = "START_TEST"|"START_CUTOVER"|"DIAGNOSTIC"|"TERMINATE"|string;
  export interface Job {
    /**
     * the ARN of the specific Job.
     */
    arn?: ARN;
    /**
     * Job creation time.
     */
    creationDateTime?: ISO8601DatetimeString;
    /**
     * Job end time.
     */
    endDateTime?: ISO8601DatetimeString;
    /**
     * Job initiated by field.
     */
    initiatedBy?: InitiatedBy;
    /**
     * Job ID.
     */
    jobID: JobID;
    /**
     * Servers participating in a specific Job.
     */
    participatingServers?: ParticipatingServers;
    /**
     * Job status.
     */
    status?: JobStatus;
    /**
     * Tags associated with specific Job.
     */
    tags?: TagsMap;
    /**
     * Job type.
     */
    type?: JobType;
  }
  export type JobID = string;
  export interface JobLog {
    /**
     * Job log event.
     */
    event?: JobLogEvent;
    /**
     * Job event data
     */
    eventData?: JobLogEventData;
    /**
     * Job log event date and time.
     */
    logDateTime?: ISO8601DatetimeString;
  }
  export type JobLogEvent = "JOB_START"|"SERVER_SKIPPED"|"CLEANUP_START"|"CLEANUP_END"|"CLEANUP_FAIL"|"SNAPSHOT_START"|"SNAPSHOT_END"|"SNAPSHOT_FAIL"|"USING_PREVIOUS_SNAPSHOT"|"CONVERSION_START"|"CONVERSION_END"|"CONVERSION_FAIL"|"LAUNCH_START"|"LAUNCH_FAILED"|"JOB_CANCEL"|"JOB_END"|string;
  export interface JobLogEventData {
    /**
     * Job Event conversion Server ID.
     */
    conversionServerID?: EC2InstanceID;
    /**
     * Job error.
     */
    rawError?: LargeBoundedString;
    /**
     * Job Event Source Server ID.
     */
    sourceServerID?: SourceServerID;
    /**
     * Job Event Target instance ID.
     */
    targetInstanceID?: EC2InstanceID;
  }
  export type JobLogs = JobLog[];
  export interface JobPostLaunchActionsLaunchStatus {
    /**
     * AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.
     */
    executionID?: BoundedString;
    /**
     * AWS Systems Manager Document's execution status.
     */
    executionStatus?: PostLaunchActionExecutionStatus;
    /**
     * AWS Systems Manager Document's failure reason.
     */
    failureReason?: BoundedString;
    /**
     * AWS Systems Manager's Document of the of the Job Post Launch Actions.
     */
    ssmDocument?: SsmDocument;
    /**
     * AWS Systems Manager Document type.
     */
    ssmDocumentType?: SsmDocumentType;
  }
  export type JobStatus = "PENDING"|"STARTED"|"COMPLETED"|string;
  export type JobType = "LAUNCH"|"TERMINATE"|string;
  export type JobsList = Job[];
  export type LargeBoundedString = string;
  export interface LaunchConfiguration {
    /**
     * Launch configuration boot mode.
     */
    bootMode?: BootMode;
    /**
     * Copy Private IP during Launch Configuration.
     */
    copyPrivateIp?: Boolean;
    /**
     * Copy Tags during Launch Configuration.
     */
    copyTags?: Boolean;
    /**
     * Launch configuration EC2 Launch template ID.
     */
    ec2LaunchTemplateID?: BoundedString;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: Boolean;
    /**
     * Launch disposition for launch configuration.
     */
    launchDisposition?: LaunchDisposition;
    /**
     * Launch configuration OS licensing.
     */
    licensing?: Licensing;
    /**
     * Map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: TagValue;
    /**
     * Launch configuration name.
     */
    name?: SmallBoundedString;
    postLaunchActions?: PostLaunchActions;
    /**
     * Launch configuration Source Server ID.
     */
    sourceServerID?: SourceServerID;
    /**
     * Launch configuration Target instance type right sizing method.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export interface LaunchConfigurationTemplate {
    /**
     * ARN of the Launch Configuration Template.
     */
    arn?: ARN;
    /**
     * Associate public Ip address.
     */
    associatePublicIpAddress?: Boolean;
    /**
     * Launch configuration template boot mode.
     */
    bootMode?: BootMode;
    /**
     * Copy private Ip.
     */
    copyPrivateIp?: Boolean;
    /**
     * Copy tags.
     */
    copyTags?: Boolean;
    /**
     * EC2 launch template ID.
     */
    ec2LaunchTemplateID?: EC2LaunchConfigurationTemplateID;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: Boolean;
    /**
     * Large volume config.
     */
    largeVolumeConf?: LaunchTemplateDiskConf;
    /**
     * ID of the Launch Configuration Template.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
    /**
     * Launch disposition.
     */
    launchDisposition?: LaunchDisposition;
    licensing?: Licensing;
    /**
     * Launch configuration template map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: TagValue;
    /**
     * Post Launch Actions of the Launch Configuration Template.
     */
    postLaunchActions?: PostLaunchActions;
    /**
     * Small volume config.
     */
    smallVolumeConf?: LaunchTemplateDiskConf;
    /**
     * Small volume maximum size.
     */
    smallVolumeMaxSize?: PositiveInteger;
    /**
     * Tags of the Launch Configuration Template.
     */
    tags?: TagsMap;
    /**
     * Target instance type right-sizing method.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export type LaunchConfigurationTemplateID = string;
  export type LaunchConfigurationTemplateIDs = LaunchConfigurationTemplateID[];
  export type LaunchConfigurationTemplates = LaunchConfigurationTemplate[];
  export type LaunchDisposition = "STOPPED"|"STARTED"|string;
  export type LaunchStatus = "PENDING"|"IN_PROGRESS"|"LAUNCHED"|"FAILED"|"TERMINATED"|string;
  export interface LaunchTemplateDiskConf {
    /**
     * Launch template disk iops configuration.
     */
    iops?: PositiveInteger;
    /**
     * Launch template disk throughput configuration.
     */
    throughput?: PositiveInteger;
    /**
     * Launch template disk volume type configuration.
     */
    volumeType?: VolumeType;
  }
  export interface LaunchedInstance {
    /**
     * Launched instance EC2 ID.
     */
    ec2InstanceID?: EC2InstanceID;
    /**
     * Launched instance first boot.
     */
    firstBoot?: FirstBoot;
    /**
     * Launched instance Job ID.
     */
    jobID?: JobID;
  }
  export interface Licensing {
    /**
     * Configure BYOL OS licensing.
     */
    osByol?: Boolean;
  }
  export interface LifeCycle {
    /**
     * Lifecycle added to service data and time.
     */
    addedToServiceDateTime?: ISO8601DatetimeString;
    /**
     * Lifecycle elapsed time and duration.
     */
    elapsedReplicationDuration?: ISO8601DurationString;
    /**
     * Lifecycle replication initiation date and time.
     */
    firstByteDateTime?: ISO8601DatetimeString;
    /**
     * Lifecycle last Cutover.
     */
    lastCutover?: LifeCycleLastCutover;
    /**
     * Lifecycle last seen date and time.
     */
    lastSeenByServiceDateTime?: ISO8601DatetimeString;
    /**
     * Lifecycle last Test.
     */
    lastTest?: LifeCycleLastTest;
    /**
     * Lifecycle state.
     */
    state?: LifeCycleState;
  }
  export interface LifeCycleLastCutover {
    /**
     * Lifecycle Cutover finalized date and time.
     */
    finalized?: LifeCycleLastCutoverFinalized;
    /**
     * Lifecycle last Cutover initiated.
     */
    initiated?: LifeCycleLastCutoverInitiated;
    /**
     * Lifecycle last Cutover reverted.
     */
    reverted?: LifeCycleLastCutoverReverted;
  }
  export interface LifeCycleLastCutoverFinalized {
    /**
     * Lifecycle Cutover finalized date and time.
     */
    apiCallDateTime?: ISO8601DatetimeString;
  }
  export interface LifeCycleLastCutoverInitiated {
    /**
     * 
     */
    apiCallDateTime?: ISO8601DatetimeString;
    /**
     * Lifecycle last Cutover initiated by Job ID.
     */
    jobID?: JobID;
  }
  export interface LifeCycleLastCutoverReverted {
    /**
     * Lifecycle last Cutover reverted API call date time.
     */
    apiCallDateTime?: ISO8601DatetimeString;
  }
  export interface LifeCycleLastTest {
    /**
     * Lifecycle last Test finalized.
     */
    finalized?: LifeCycleLastTestFinalized;
    /**
     * Lifecycle last Test initiated.
     */
    initiated?: LifeCycleLastTestInitiated;
    /**
     * Lifecycle last Test reverted.
     */
    reverted?: LifeCycleLastTestReverted;
  }
  export interface LifeCycleLastTestFinalized {
    /**
     * Lifecycle Test failed API call date and time.
     */
    apiCallDateTime?: ISO8601DatetimeString;
  }
  export interface LifeCycleLastTestInitiated {
    /**
     * Lifecycle last Test initiated API call date and time.
     */
    apiCallDateTime?: ISO8601DatetimeString;
    /**
     * Lifecycle last Test initiated Job ID.
     */
    jobID?: JobID;
  }
  export interface LifeCycleLastTestReverted {
    /**
     * Lifecycle last Test reverted API call date and time.
     */
    apiCallDateTime?: ISO8601DatetimeString;
  }
  export type LifeCycleState = "STOPPED"|"NOT_READY"|"READY_FOR_TEST"|"TESTING"|"READY_FOR_CUTOVER"|"CUTTING_OVER"|"CUTOVER"|"DISCONNECTED"|"DISCOVERED"|string;
  export type LifeCycleStates = LifeCycleState[];
  export interface ListApplicationsRequest {
    /**
     * Applications list filters.
     */
    filters?: ListApplicationsRequestFilters;
    /**
     * Maximum results to return when listing applications.
     */
    maxResults?: MaxResultsType;
    /**
     * Request next token.
     */
    nextToken?: PaginationToken;
  }
  export interface ListApplicationsRequestFilters {
    /**
     * Filter applications list by application ID.
     */
    applicationIDs?: ApplicationIDsFilter;
    /**
     * Filter applications list by archival status.
     */
    isArchived?: Boolean;
    /**
     * Filter applications list by wave ID.
     */
    waveIDs?: WaveIDsFilter;
  }
  export interface ListApplicationsResponse {
    /**
     * Applications list.
     */
    items?: ApplicationsList;
    /**
     * Response next token.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSourceServerActionsRequest {
    /**
     * Filters to apply when listing source server post migration custom actions.
     */
    filters?: SourceServerActionsRequestFilters;
    /**
     * Maximum amount of items to return when listing source server post migration custom actions.
     */
    maxResults?: MaxResultsType;
    /**
     * Next token to use when listing source server post migration custom actions.
     */
    nextToken?: PaginationToken;
    /**
     * Source server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface ListSourceServerActionsResponse {
    /**
     * List of source server post migration custom actions.
     */
    items?: SourceServerActionDocuments;
    /**
     * Next token returned when listing source server post migration custom actions.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * List tags for resource request by ARN.
     */
    resourceArn: ARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * List tags for resource response.
     */
    tags?: TagsMap;
  }
  export interface ListTemplateActionsRequest {
    /**
     * Filters to apply when listing template post migration custom actions.
     */
    filters?: TemplateActionsRequestFilters;
    /**
     * Launch configuration template ID.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
    /**
     * Maximum amount of items to return when listing template post migration custom actions.
     */
    maxResults?: MaxResultsType;
    /**
     * Next token to use when listing template post migration custom actions.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTemplateActionsResponse {
    /**
     * List of template post migration custom actions.
     */
    items?: TemplateActionDocuments;
    /**
     * Next token returned when listing template post migration custom actions.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWavesRequest {
    /**
     * Waves list filters.
     */
    filters?: ListWavesRequestFilters;
    /**
     * Maximum results to return when listing waves.
     */
    maxResults?: MaxResultsType;
    /**
     * Request next token.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWavesRequestFilters {
    /**
     * Filter waves list by archival status.
     */
    isArchived?: Boolean;
    /**
     * Filter waves list by wave ID.
     */
    waveIDs?: WaveIDsFilter;
  }
  export interface ListWavesResponse {
    /**
     * Waves list.
     */
    items?: WavesList;
    /**
     * Response next token.
     */
    nextToken?: PaginationToken;
  }
  export interface MarkAsArchivedRequest {
    /**
     * Mark as archived by Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export type MaxResultsType = number;
  export interface NetworkInterface {
    /**
     * Network interface IPs.
     */
    ips?: IPsList;
    /**
     * Network interface primary IP.
     */
    isPrimary?: Boolean;
    /**
     * Network interface Mac address.
     */
    macAddress?: BoundedString;
  }
  export type NetworkInterfaces = NetworkInterface[];
  export interface OS {
    /**
     * OS full string.
     */
    fullString?: BoundedString;
  }
  export type OperatingSystemString = string;
  export type OrderType = number;
  export type PaginationToken = string;
  export interface ParticipatingServer {
    /**
     * Participating server launch status.
     */
    launchStatus?: LaunchStatus;
    /**
     * Participating server's launched ec2 instance ID.
     */
    launchedEc2InstanceID?: EC2InstanceID;
    /**
     * Participating server's Post Launch Actions Status.
     */
    postLaunchActionsStatus?: PostLaunchActionsStatus;
    /**
     * Participating server Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export type ParticipatingServers = ParticipatingServer[];
  export type PositiveInteger = number;
  export type PostLaunchActionExecutionStatus = "IN_PROGRESS"|"SUCCESS"|"FAILED"|string;
  export interface PostLaunchActions {
    /**
     * AWS Systems Manager Command's CloudWatch log group name.
     */
    cloudWatchLogGroupName?: CloudWatchLogGroupName;
    /**
     * Deployment type in which AWS Systems Manager Documents will be executed.
     */
    deployment?: PostLaunchActionsDeploymentType;
    /**
     * AWS Systems Manager Command's logs S3 log bucket.
     */
    s3LogBucket?: S3LogBucketName;
    /**
     * AWS Systems Manager Command's logs S3 output key prefix.
     */
    s3OutputKeyPrefix?: BoundedString;
    /**
     * AWS Systems Manager Documents.
     */
    ssmDocuments?: SsmDocuments;
  }
  export type PostLaunchActionsDeploymentType = "TEST_AND_CUTOVER"|"CUTOVER_ONLY"|"TEST_ONLY"|string;
  export type PostLaunchActionsLaunchStatusList = JobPostLaunchActionsLaunchStatus[];
  export interface PostLaunchActionsStatus {
    /**
     * List of Post Launch Action status.
     */
    postLaunchActionsLaunchStatusList?: PostLaunchActionsLaunchStatusList;
    /**
     * Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.
     */
    ssmAgentDiscoveryDatetime?: ISO8601DatetimeString;
  }
  export interface PutSourceServerActionRequest {
    /**
     * Source server post migration custom action ID.
     */
    actionID: ActionID;
    /**
     * Source server post migration custom action name.
     */
    actionName: ActionName;
    /**
     * Source server post migration custom action active status.
     */
    active?: Boolean;
    /**
     * Source server post migration custom action document identifier.
     */
    documentIdentifier: BoundedString;
    /**
     * Source server post migration custom action document version.
     */
    documentVersion?: DocumentVersion;
    /**
     * Source server post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: Boolean;
    /**
     * Source server post migration custom action order.
     */
    order: OrderType;
    /**
     * Source server post migration custom action parameters.
     */
    parameters?: SsmDocumentParameters;
    /**
     * Source server ID.
     */
    sourceServerID: SourceServerID;
    /**
     * Source server post migration custom action timeout in seconds.
     */
    timeoutSeconds?: StrictlyPositiveInteger;
  }
  export interface PutTemplateActionRequest {
    /**
     * Template post migration custom action ID.
     */
    actionID: ActionID;
    /**
     * Template post migration custom action name.
     */
    actionName: BoundedString;
    /**
     * Template post migration custom action active status.
     */
    active?: Boolean;
    /**
     * Template post migration custom action document identifier.
     */
    documentIdentifier: BoundedString;
    /**
     * Template post migration custom action document version.
     */
    documentVersion?: DocumentVersion;
    /**
     * Launch configuration template ID.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
    /**
     * Template post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: Boolean;
    /**
     * Operating system eligible for this template post migration custom action.
     */
    operatingSystem?: OperatingSystemString;
    /**
     * Template post migration custom action order.
     */
    order: OrderType;
    /**
     * Template post migration custom action parameters.
     */
    parameters?: SsmDocumentParameters;
    /**
     * Template post migration custom action timeout in seconds.
     */
    timeoutSeconds?: StrictlyPositiveInteger;
  }
  export interface RemoveSourceServerActionRequest {
    /**
     * Source server post migration custom action ID to remove.
     */
    actionID: ActionID;
    /**
     * Source server ID of the post migration custom action to remove.
     */
    sourceServerID: SourceServerID;
  }
  export interface RemoveSourceServerActionResponse {
  }
  export interface RemoveTemplateActionRequest {
    /**
     * Template post migration custom action ID to remove.
     */
    actionID: ActionID;
    /**
     * Launch configuration template ID of the post migration custom action to remove.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
  }
  export interface RemoveTemplateActionResponse {
  }
  export interface ReplicationConfiguration {
    /**
     * Replication Configuration associate default Application Migration Service Security Group.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Replication Configuration set bandwidth throttling.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Replication Configuration create Public IP.
     */
    createPublicIP?: Boolean;
    /**
     * Replication Configuration data plane routing.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * Replication Configuration use default large Staging Disks.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * Replication Configuration EBS encryption.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * Replication Configuration EBS encryption key ARN.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * Replication Configuration name.
     */
    name?: SmallBoundedString;
    /**
     * Replication Configuration replicated disks.
     */
    replicatedDisks?: ReplicationConfigurationReplicatedDisks;
    /**
     * Replication Configuration Replication Server instance type.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * Replication Configuration Replication Server Security Group IDs.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * Replication Configuration Source Server ID.
     */
    sourceServerID?: SourceServerID;
    /**
     * Replication Configuration Staging Area subnet ID.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * Replication Configuration Staging Area tags.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Replication Configuration use Dedicated Replication Server.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ReplicationConfigurationDataPlaneRouting = "PRIVATE_IP"|"PUBLIC_IP"|string;
  export type ReplicationConfigurationDefaultLargeStagingDiskType = "GP2"|"ST1"|"GP3"|string;
  export type ReplicationConfigurationEbsEncryption = "DEFAULT"|"CUSTOM"|string;
  export interface ReplicationConfigurationReplicatedDisk {
    /**
     * Replication Configuration replicated disk device name.
     */
    deviceName?: BoundedString;
    /**
     * Replication Configuration replicated disk IOPs.
     */
    iops?: PositiveInteger;
    /**
     * Replication Configuration replicated disk boot disk.
     */
    isBootDisk?: Boolean;
    /**
     * Replication Configuration replicated disk staging disk type.
     */
    stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
    /**
     * Replication Configuration replicated disk throughput.
     */
    throughput?: PositiveInteger;
  }
  export type ReplicationConfigurationReplicatedDiskStagingDiskType = "AUTO"|"GP2"|"IO1"|"SC1"|"ST1"|"STANDARD"|"GP3"|"IO2"|string;
  export type ReplicationConfigurationReplicatedDisks = ReplicationConfigurationReplicatedDisk[];
  export interface ReplicationConfigurationTemplate {
    /**
     * Replication Configuration template ARN.
     */
    arn?: ARN;
    /**
     * Replication Configuration template associate default Application Migration Service Security group.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Replication Configuration template bandwidth throttling.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Replication Configuration template create Public IP.
     */
    createPublicIP?: Boolean;
    /**
     * Replication Configuration template data plane routing.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * Replication Configuration template use default large Staging Disk type.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * Replication Configuration template EBS encryption.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * Replication Configuration template EBS encryption key ARN.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * Replication Configuration template ID.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
    /**
     * Replication Configuration template server instance type.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * Replication Configuration template server Security Groups IDs.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * Replication Configuration template Staging Area subnet ID.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * Replication Configuration template Staging Area Tags.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Replication Configuration template Tags.
     */
    tags?: TagsMap;
    /**
     * Replication Configuration template use Dedicated Replication Server.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ReplicationConfigurationTemplateID = string;
  export type ReplicationConfigurationTemplateIDs = ReplicationConfigurationTemplateID[];
  export type ReplicationConfigurationTemplates = ReplicationConfigurationTemplate[];
  export type ReplicationServersSecurityGroupsIDs = SecurityGroupID[];
  export type ReplicationType = "AGENT_BASED"|"SNAPSHOT_SHIPPING"|string;
  export type ReplicationTypes = ReplicationType[];
  export interface RetryDataReplicationRequest {
    /**
     * Retry data replication for Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export type S3LogBucketName = string;
  export type SecurityGroupID = string;
  export type SmallBoundedString = string;
  export interface SourceProperties {
    /**
     * Source Server CPUs.
     */
    cpus?: Cpus;
    /**
     * Source Server disks.
     */
    disks?: Disks;
    /**
     * Source server identification hints.
     */
    identificationHints?: IdentificationHints;
    /**
     * Source server last update date and time.
     */
    lastUpdatedDateTime?: ISO8601DatetimeString;
    /**
     * Source server network interfaces.
     */
    networkInterfaces?: NetworkInterfaces;
    /**
     * Source server OS.
     */
    os?: OS;
    /**
     * Source server RAM in bytes.
     */
    ramBytes?: PositiveInteger;
    /**
     * Source server recommended instance type.
     */
    recommendedInstanceType?: EC2InstanceType;
  }
  export interface SourceServer {
    /**
     * Source server application ID.
     */
    applicationID?: ApplicationID;
    /**
     * Source server ARN.
     */
    arn?: ARN;
    /**
     * Source server data replication info.
     */
    dataReplicationInfo?: DataReplicationInfo;
    /**
     * Source server archived status.
     */
    isArchived?: Boolean;
    /**
     * Source server launched instance.
     */
    launchedInstance?: LaunchedInstance;
    /**
     * Source server lifecycle state.
     */
    lifeCycle?: LifeCycle;
    /**
     * Source server replication type.
     */
    replicationType?: ReplicationType;
    /**
     * Source server properties.
     */
    sourceProperties?: SourceProperties;
    /**
     * Source server ID.
     */
    sourceServerID?: SourceServerID;
    /**
     * Source server Tags.
     */
    tags?: TagsMap;
    /**
     * Source server vCenter client id.
     */
    vcenterClientID?: VcenterClientID;
  }
  export interface SourceServerActionDocument {
    /**
     * Source server post migration custom action ID.
     */
    actionID?: ActionID;
    /**
     * Source server post migration custom action name.
     */
    actionName?: ActionName;
    /**
     * Source server post migration custom action active status.
     */
    active?: Boolean;
    /**
     * Source server post migration custom action document identifier.
     */
    documentIdentifier?: BoundedString;
    /**
     * Source server post migration custom action document version.
     */
    documentVersion?: DocumentVersion;
    /**
     * Source server post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: Boolean;
    /**
     * Source server post migration custom action order.
     */
    order?: OrderType;
    /**
     * Source server post migration custom action parameters.
     */
    parameters?: SsmDocumentParameters;
    /**
     * Source server post migration custom action timeout in seconds.
     */
    timeoutSeconds?: StrictlyPositiveInteger;
  }
  export type SourceServerActionDocuments = SourceServerActionDocument[];
  export interface SourceServerActionsRequestFilters {
    /**
     * Action IDs to filter source server post migration custom actions by.
     */
    actionIDs?: ActionIDs;
  }
  export type SourceServerID = string;
  export type SourceServersList = SourceServer[];
  export interface SsmDocument {
    /**
     * User-friendly name for the AWS Systems Manager Document.
     */
    actionName: BoundedString;
    /**
     * If true, Cutover will not be enabled if the document has failed.
     */
    mustSucceedForCutover?: Boolean;
    /**
     * AWS Systems Manager Document parameters.
     */
    parameters?: SsmDocumentParameters;
    /**
     * AWS Systems Manager Document name or full ARN.
     */
    ssmDocumentName: SsmDocumentName;
    /**
     * AWS Systems Manager Document timeout seconds.
     */
    timeoutSeconds?: StrictlyPositiveInteger;
  }
  export type SsmDocumentName = string;
  export type SsmDocumentParameterName = string;
  export type SsmDocumentParameters = {[key: string]: SsmParameterStoreParameters};
  export type SsmDocumentType = "AUTOMATION"|"COMMAND"|string;
  export type SsmDocuments = SsmDocument[];
  export interface SsmParameterStoreParameter {
    /**
     * AWS Systems Manager Parameter Store parameter name.
     */
    parameterName: SsmParameterStoreParameterName;
    /**
     * AWS Systems Manager Parameter Store parameter type.
     */
    parameterType: SsmParameterStoreParameterType;
  }
  export type SsmParameterStoreParameterName = string;
  export type SsmParameterStoreParameterType = "STRING"|string;
  export type SsmParameterStoreParameters = SsmParameterStoreParameter[];
  export interface StartCutoverRequest {
    /**
     * Start Cutover by Source Server IDs.
     */
    sourceServerIDs: StartCutoverRequestSourceServerIDs;
    /**
     * Start Cutover by Tags.
     */
    tags?: TagsMap;
  }
  export type StartCutoverRequestSourceServerIDs = SourceServerID[];
  export interface StartCutoverResponse {
    /**
     * Start Cutover Job response.
     */
    job?: Job;
  }
  export interface StartReplicationRequest {
    /**
     * ID of source server on which to start replication.
     */
    sourceServerID: SourceServerID;
  }
  export interface StartTestRequest {
    /**
     * Start Test for Source Server IDs.
     */
    sourceServerIDs: StartTestRequestSourceServerIDs;
    /**
     * Start Test by Tags.
     */
    tags?: TagsMap;
  }
  export type StartTestRequestSourceServerIDs = SourceServerID[];
  export interface StartTestResponse {
    /**
     * Start Test Job response.
     */
    job?: Job;
  }
  export type StrictlyPositiveInteger = number;
  export type SubnetID = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * Tag resource by ARN.
     */
    resourceArn: ARN;
    /**
     * Tag resource by Tags.
     */
    tags: TagsMap;
  }
  export type TagValue = string;
  export type TagsMap = {[key: string]: TagValue};
  export type TargetInstanceTypeRightSizingMethod = "NONE"|"BASIC"|string;
  export interface TemplateActionDocument {
    /**
     * Template post migration custom action ID.
     */
    actionID?: ActionID;
    /**
     * Template post migration custom action name.
     */
    actionName?: BoundedString;
    /**
     * Template post migration custom action active status.
     */
    active?: Boolean;
    /**
     * Template post migration custom action document identifier.
     */
    documentIdentifier?: BoundedString;
    /**
     * Template post migration custom action document version.
     */
    documentVersion?: DocumentVersion;
    /**
     * Template post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: Boolean;
    /**
     * Operating system eligible for this template post migration custom action.
     */
    operatingSystem?: OperatingSystemString;
    /**
     * Template post migration custom action order.
     */
    order?: OrderType;
    /**
     * Template post migration custom action parameters.
     */
    parameters?: SsmDocumentParameters;
    /**
     * Template post migration custom action timeout in seconds.
     */
    timeoutSeconds?: StrictlyPositiveInteger;
  }
  export type TemplateActionDocuments = TemplateActionDocument[];
  export interface TemplateActionsRequestFilters {
    /**
     * Action IDs to filter template post migration custom actions by.
     */
    actionIDs?: ActionIDs;
  }
  export interface TerminateTargetInstancesRequest {
    /**
     * Terminate Target instance by Source Server IDs.
     */
    sourceServerIDs: TerminateTargetInstancesRequestSourceServerIDs;
    /**
     * Terminate Target instance by Tags.
     */
    tags?: TagsMap;
  }
  export type TerminateTargetInstancesRequestSourceServerIDs = SourceServerID[];
  export interface TerminateTargetInstancesResponse {
    /**
     * Terminate Target instance Job response.
     */
    job?: Job;
  }
  export interface UnarchiveApplicationRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
  }
  export interface UnarchiveWaveRequest {
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface UntagResourceRequest {
    /**
     * Untag resource by ARN.
     */
    resourceArn: ARN;
    /**
     * Untag resource by Keys.
     */
    tagKeys: TagKeys;
  }
  export interface UpdateApplicationRequest {
    /**
     * Application ID.
     */
    applicationID: ApplicationID;
    /**
     * Application description.
     */
    description?: ApplicationDescription;
    /**
     * Application name.
     */
    name?: ApplicationName;
  }
  export interface UpdateLaunchConfigurationRequest {
    /**
     * Update Launch configuration boot mode request.
     */
    bootMode?: BootMode;
    /**
     * Update Launch configuration copy Private IP request.
     */
    copyPrivateIp?: Boolean;
    /**
     * Update Launch configuration copy Tags request.
     */
    copyTags?: Boolean;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: Boolean;
    /**
     * Update Launch configuration launch disposition request.
     */
    launchDisposition?: LaunchDisposition;
    /**
     * Update Launch configuration licensing request.
     */
    licensing?: Licensing;
    /**
     * Launch configuration map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: TagValue;
    /**
     * Update Launch configuration name request.
     */
    name?: SmallBoundedString;
    postLaunchActions?: PostLaunchActions;
    /**
     * Update Launch configuration by Source Server ID request.
     */
    sourceServerID: SourceServerID;
    /**
     * Update Launch configuration Target instance right sizing request.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export interface UpdateLaunchConfigurationTemplateRequest {
    /**
     * Associate public Ip address.
     */
    associatePublicIpAddress?: Boolean;
    /**
     * Launch configuration template boot mode.
     */
    bootMode?: BootMode;
    /**
     * Copy private Ip.
     */
    copyPrivateIp?: Boolean;
    /**
     * Copy tags.
     */
    copyTags?: Boolean;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: Boolean;
    /**
     * Large volume config.
     */
    largeVolumeConf?: LaunchTemplateDiskConf;
    /**
     * Launch Configuration Template ID.
     */
    launchConfigurationTemplateID: LaunchConfigurationTemplateID;
    /**
     * Launch disposition.
     */
    launchDisposition?: LaunchDisposition;
    licensing?: Licensing;
    /**
     * Launch configuration template map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: TagValue;
    /**
     * Post Launch Action to execute on the Test or Cutover instance.
     */
    postLaunchActions?: PostLaunchActions;
    /**
     * Small volume config.
     */
    smallVolumeConf?: LaunchTemplateDiskConf;
    /**
     * Small volume maximum size.
     */
    smallVolumeMaxSize?: PositiveInteger;
    /**
     * Target instance type right-sizing method.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export interface UpdateReplicationConfigurationRequest {
    /**
     * Update replication configuration associate default Application Migration Service Security group request.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Update replication configuration bandwidth throttling request.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Update replication configuration create Public IP request.
     */
    createPublicIP?: Boolean;
    /**
     * Update replication configuration data plane routing request.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * Update replication configuration use default large Staging Disk type request.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * Update replication configuration EBS encryption request.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * Update replication configuration EBS encryption key ARN request.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * Update replication configuration name request.
     */
    name?: SmallBoundedString;
    /**
     * Update replication configuration replicated disks request.
     */
    replicatedDisks?: ReplicationConfigurationReplicatedDisks;
    /**
     * Update replication configuration Replication Server instance type request.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * Update replication configuration Replication Server Security Groups IDs request.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * Update replication configuration Source Server ID request.
     */
    sourceServerID: SourceServerID;
    /**
     * Update replication configuration Staging Area subnet request.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * Update replication configuration Staging Area Tags request.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Update replication configuration use dedicated Replication Server request.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export interface UpdateReplicationConfigurationTemplateRequest {
    /**
     * Update replication configuration template ARN request.
     */
    arn?: ARN;
    /**
     * Update replication configuration template associate default Application Migration Service Security group request.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Update replication configuration template bandwidth throttling request.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Update replication configuration template create Public IP request.
     */
    createPublicIP?: Boolean;
    /**
     * Update replication configuration template data plane routing request.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * Update replication configuration template use default large Staging Disk type request.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * Update replication configuration template EBS encryption request.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * Update replication configuration template EBS encryption key ARN request.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * Update replication configuration template template ID request.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
    /**
     * Update replication configuration template Replication Server instance type request.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * Update replication configuration template Replication Server Security groups IDs request.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * Update replication configuration template Staging Area subnet ID request.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * Update replication configuration template Staging Area Tags request.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Update replication configuration template use dedicated Replication Server request.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export interface UpdateSourceServerReplicationTypeRequest {
    /**
     * Replication type to which to update source server.
     */
    replicationType: ReplicationType;
    /**
     * ID of source server on which to update replication type.
     */
    sourceServerID: SourceServerID;
  }
  export interface UpdateWaveRequest {
    /**
     * Wave description.
     */
    description?: WaveDescription;
    /**
     * Wave name.
     */
    name?: WaveName;
    /**
     * Wave ID.
     */
    waveID: WaveID;
  }
  export interface VcenterClient {
    /**
     * Arn of vCenter client.
     */
    arn?: ARN;
    /**
     * Datacenter name of vCenter client.
     */
    datacenterName?: BoundedString;
    /**
     * Hostname of vCenter client .
     */
    hostname?: BoundedString;
    /**
     * Last seen time of vCenter client.
     */
    lastSeenDatetime?: ISO8601DatetimeString;
    /**
     * Tags for Source Server of vCenter client.
     */
    sourceServerTags?: TagsMap;
    /**
     * Tags for vCenter client.
     */
    tags?: TagsMap;
    /**
     * ID of vCenter client.
     */
    vcenterClientID?: VcenterClientID;
    /**
     * Vcenter UUID of vCenter client.
     */
    vcenterUUID?: BoundedString;
  }
  export type VcenterClientID = string;
  export type VcenterClientList = VcenterClient[];
  export type VolumeType = "io1"|"io2"|"gp3"|"gp2"|"st1"|"sc1"|"standard"|string;
  export interface Wave {
    /**
     * Wave ARN.
     */
    arn?: ARN;
    /**
     * Wave creation dateTime.
     */
    creationDateTime?: ISO8601DatetimeString;
    /**
     * Wave description.
     */
    description?: WaveDescription;
    /**
     * Wave archival status.
     */
    isArchived?: Boolean;
    /**
     * Wave last modified dateTime.
     */
    lastModifiedDateTime?: ISO8601DatetimeString;
    /**
     * Wave name.
     */
    name?: WaveName;
    /**
     * Wave tags.
     */
    tags?: TagsMap;
    /**
     * Wave aggregated status.
     */
    waveAggregatedStatus?: WaveAggregatedStatus;
    /**
     * Wave ID.
     */
    waveID?: WaveID;
  }
  export interface WaveAggregatedStatus {
    /**
     * Wave aggregated status health status.
     */
    healthStatus?: WaveHealthStatus;
    /**
     * Wave aggregated status last update dateTime.
     */
    lastUpdateDateTime?: ISO8601DatetimeString;
    /**
     * Wave aggregated status progress status.
     */
    progressStatus?: WaveProgressStatus;
    /**
     * DateTime marking when the first source server in the wave started replication.
     */
    replicationStartedDateTime?: ISO8601DatetimeString;
    /**
     * Wave aggregated status total applications amount.
     */
    totalApplications?: PositiveInteger;
  }
  export type WaveDescription = string;
  export type WaveHealthStatus = "HEALTHY"|"LAGGING"|"ERROR"|string;
  export type WaveID = string;
  export type WaveIDsFilter = WaveID[];
  export type WaveName = string;
  export type WaveProgressStatus = "NOT_STARTED"|"IN_PROGRESS"|"COMPLETED"|string;
  export type WavesList = Wave[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-02-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Mgn client.
   */
  export import Types = Mgn;
}
export = Mgn;